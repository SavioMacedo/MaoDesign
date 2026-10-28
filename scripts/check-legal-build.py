#!/usr/bin/env python3
"""Valida o HTML renderizado das 12 páginas legais públicas."""

from __future__ import annotations

import argparse
import re
import sys
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


PAGES = {
    "privacy-policy": ("pt-BR", "/Legal/privacy-policy/"),
    "privacy-policy-en": ("en-US", "/Legal/privacy-policy-en/"),
    "privacy-policy-es": ("es-ES", "/Legal/privacy-policy-es/"),
    "terms-of-service": ("pt-BR", "/Legal/terms-of-service/"),
    "terms-of-service-en": ("en-US", "/Legal/terms-of-service-en/"),
    "terms-of-service-es": ("es-ES", "/Legal/terms-of-service-es/"),
    "delete-account": ("pt-BR", "/Legal/delete-account/"),
    "delete-account-en": ("en-US", "/Legal/delete-account-en/"),
    "delete-account-es": ("es-ES", "/Legal/delete-account-es/"),
    "help": ("pt-BR", "/Legal/help/"),
    "help-en": ("en-US", "/Legal/help-en/"),
    "help-es": ("es-ES", "/Legal/help-es/"),
}
TERMS_BY_LANGUAGE = {
    "help": "/Legal/terms-of-service/",
    "help-en": "/Legal/terms-of-service-en/",
    "help-es": "/Legal/terms-of-service-es/",
}
SUPPORT_MAILTO = "mailto:saviomacedo718+maodesign@gmail.com"


class PortugueseHelpFormatter(argparse.HelpFormatter):
    def add_usage(self, usage, actions, groups, prefix=None):
        super().add_usage(usage, actions, groups, "uso: ")


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.html_langs: list[str | None] = []
        self.viewport_contents: list[str] = []
        self.ids: Counter[str] = Counter()
        self.hrefs: list[str] = []
        self.styles: list[str] = []
        self.events: list[tuple[str, str]] = []
        self._heading_tag: str | None = None
        self._heading_text: list[str] = []
        self._in_style = False
        self._style_text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        tag = tag.lower()
        if tag == "html":
            self.html_langs.append(attributes.get("lang"))
        if tag == "meta" and (attributes.get("name") or "").lower() == "viewport":
            self.viewport_contents.append(attributes.get("content") or "")
        if "id" in attributes and attributes["id"] is not None:
            identifier = attributes["id"] or ""
            self.ids[identifier] += 1
            self.events.append(("id", identifier))
        if tag == "a" and attributes.get("href"):
            self.hrefs.append(attributes["href"] or "")
        if tag in {"h1", "h2", "h3", "h4", "h5", "h6"}:
            self._heading_tag = tag
            self._heading_text = []
        if tag == "style":
            self._in_style = True
            self._style_text = []

    def handle_data(self, data: str) -> None:
        if self._heading_tag is not None:
            self._heading_text.append(data)
        if self._in_style:
            self._style_text.append(data)

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if self._heading_tag == tag:
            text = " ".join("".join(self._heading_text).split())
            self.events.append(("heading", text))
            self._heading_tag = None
            self._heading_text = []
        if tag == "style" and self._in_style:
            self.styles.append("".join(self._style_text))
            self._in_style = False
            self._style_text = []


def read_site_settings(root: Path) -> tuple[str, str]:
    config = (root / "_config.yml").read_text(encoding="utf-8")
    base_match = re.search(r"(?m)^baseurl:\s*['\"]?(.*?)['\"]?\s*$", config)
    url_match = re.search(r"(?m)^url:\s*['\"]?(.*?)['\"]?\s*$", config)
    if not base_match or not url_match:
        raise ValueError("Não foi possível ler baseurl e url de _config.yml.")
    baseurl = base_match.group(1).strip().rstrip("/")
    site_origin = url_match.group(1).strip().rstrip("/")
    return baseurl, site_origin


def output_file(site_dir: Path, route: str) -> Path:
    decoded = unquote(route)
    relative = decoded.lstrip("/")
    if decoded.endswith("/") or not Path(relative).suffix:
        directory_index = site_dir / relative / "index.html"
        if directory_index.is_file():
            return directory_index
    candidate = site_dir / relative
    if candidate.is_file():
        return candidate
    if not candidate.suffix:
        candidate = candidate.with_suffix(".html")
    return candidate


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Valida o HTML renderizado das 12 páginas legais públicas.",
        add_help=False,
        formatter_class=PortugueseHelpFormatter,
    )
    options = parser.add_argument_group("Opções")
    options.add_argument("-h", "--help", action="help", help="Exibe esta ajuda e encerra.")
    options.add_argument(
        "--site-dir",
        type=Path,
        default=Path("_site"),
        help="Diretório do site Jekyll gerado (padrão: _site).",
    )
    options.add_argument("--baseurl", help="Substitui o baseurl lido de _config.yml.")
    args = parser.parse_args()

    root = Path.cwd()
    site_dir = args.site_dir.resolve()
    if not site_dir.is_dir():
        print(f"FALHOU: o diretório do site gerado não existe: {site_dir}", file=sys.stderr)
        return 1

    try:
        baseurl, site_origin = read_site_settings(root)
    except (OSError, ValueError) as error:
        print(f"FALHOU: {error}", file=sys.stderr)
        return 1
    if args.baseurl is not None:
        baseurl = args.baseurl.rstrip("/")
    site_host = urlsplit(site_origin).netloc.lower()

    failures: list[str] = []
    documents: dict[str, tuple[str, PageParser]] = {}
    generated_routes = {route for _, route in PAGES.values()}

    def check(condition: bool, message: str) -> None:
        if condition:
            print(f"PASSOU: {message}")
        else:
            failures.append(message)
            print(f"FALHOU: {message}", file=sys.stderr)

    for slug, (expected_lang, route) in PAGES.items():
        html_path = output_file(site_dir, route)
        check(html_path.is_file(), f"a página gerada existe: {route}")
        if not html_path.is_file():
            continue

        html = html_path.read_text(encoding="utf-8")
        page = PageParser()
        page.feed(html)
        documents[slug] = (html, page)

        check(
            len(page.html_langs) == 1 and page.html_langs[0] == expected_lang,
            f"o atributo lang de {route} é {expected_lang}",
        )
        check(
            len(page.viewport_contents) == 1
            and page.viewport_contents[0] == "width=device-width, initial-scale=1",
            f"a meta viewport responsiva foi renderizada em {route}",
        )
        rendered_styles = "\n".join(page.styles)
        check(
            re.search(r"@media\s*\(max-width:\s*768px\)", rendered_styles) is not None
            and re.search(r"@media\s*\(max-width:\s*480px\)", rendered_styles) is not None,
            f"os breakpoints responsivos do layout foram renderizados em {route}",
        )
        check("{{" not in html and "{%" not in html, f"não há Liquid residual em {route}")
        check(SUPPORT_MAILTO in page.hrefs, f"o link mailto de suporte foi renderizado em {route}")

    for slug in ("terms-of-service", "terms-of-service-en", "terms-of-service-es"):
        if slug not in documents:
            continue
        _, page = documents[slug]
        check(
            page.ids["subscription-cancellation"] == 1,
            f"a âncora subscription-cancellation aparece uma vez em /Legal/{slug}/",
        )
        anchor_event = next(
            (index for index, event in enumerate(page.events) if event == ("id", "subscription-cancellation")),
            None,
        )
        section_event = next(
            (
                index
                for index, event in enumerate(page.events)
                if event[0] == "heading" and event[1].startswith("3.2")
            ),
            None,
        )
        check(
            anchor_event is not None and section_event is not None and anchor_event < section_event,
            f"a âncora subscription-cancellation precede a seção 3.2 em /Legal/{slug}/",
        )

    for help_slug, terms_route in TERMS_BY_LANGUAGE.items():
        if help_slug not in documents:
            continue
        _, page = documents[help_slug]
        expected_href = f"{baseurl}{terms_route}#subscription-cancellation"
        check(
            expected_href in page.hrefs,
            f"a página {help_slug} aponta diretamente para a âncora dos Termos no mesmo idioma",
        )

    for slug, (_, page) in documents.items():
        for href in page.hrefs:
            split = urlsplit(href)
            if split.scheme or split.netloc:
                if split.netloc.lower() != site_host:
                    continue
            path = unquote(split.path)
            if baseurl and path.startswith(baseurl + "/Legal/"):
                route = path[len(baseurl) :]
            elif path.startswith("/Legal/"):
                check(False, f"o link legal interno não tem o baseurl configurado: {href} em {slug}")
                continue
            else:
                continue

            check(route in generated_routes, f"o link legal aponta para uma página declarada: {href} em {slug}")
            target_path = output_file(site_dir, route)
            check(target_path.is_file(), f"o destino do link legal existe: {href} em {slug}")
            if split.fragment and target_path.is_file():
                target_slug = next(
                    (candidate for candidate, (_, candidate_route) in PAGES.items() if candidate_route == route),
                    None,
                )
                target_page = documents.get(target_slug, ("", None))[1] if target_slug else None
                if target_page is None:
                    target_html = target_path.read_text(encoding="utf-8")
                    target_page = PageParser()
                    target_page.feed(target_html)
                fragment = unquote(split.fragment)
                check(
                    target_page.ids[fragment] > 0,
                    f"o fragmento #{fragment} existe no destino de {href} em {slug}",
                )

    check(
        not (site_dir / "scripts" / "check-legal-build.py").exists(),
        "o script validador foi excluído do site gerado",
    )

    print(f"Resumo: {len(PAGES)} páginas esperadas; {len(failures)} verificações falharam.")
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
