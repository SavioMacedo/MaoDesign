---
layout: legal
title: "Exclusão de Conta"
description: "Como excluir sua conta e dados vinculados no MaoDesign"
lang: pt-BR
permalink: /Legal/delete-account/
---

# Exclusão de Conta no MaoDesign

**Última atualização:** 23 de julho de 2026  
**Versão:** 2.0

## Excluir pelo aplicativo

Se você consegue entrar na conta:

1. Abra o MaoDesign.
2. Acesse **Perfil**.
3. Toque em **Excluir conta**.
4. Leia o aviso e confirme **Excluir conta**.
5. Se o Firebase solicitar autenticação recente, entre novamente e repita a operação.

Quando a operação termina, o MaoDesign remove os marcadores Firestore vinculados ao seu identificador, exclui sua identidade Firebase e limpa as credenciais locais de login.

## Solicitar por e-mail

Se você não consegue usar o fluxo do aplicativo, envie a solicitação para [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com) com:

- assunto **Exclusão de conta MaoDesign**;
- endereço da conta Google usada no MaoDesign;
- uma breve confirmação de que deseja excluir permanentemente a conta.

Não envie senha, token, documento pessoal ou dados de pagamento. Poderemos responder pelo mesmo endereço para confirmar que a solicitação pertence ao titular. A solicitação será tratada tão logo seja possível e conforme a legislação aplicável.

## Dados excluídos

- identidade e identificador da conta Firebase;
- nome, e-mail e foto mantidos no perfil Firebase do MaoDesign;
- marcadores de uso armazenados em `users/{uid}/aha_markers` no Firestore;
- credenciais locais da sessão MaoDesign.

## Dados preservados ou tratados separadamente

- **Arquivos de bordado, miniaturas, favoritos, recentes e preferências locais:** permanecem no dispositivo porque não pertencem à conta em nuvem. Você pode removê-los limpando os dados do aplicativo ou desinstalando-o.
- **Relatórios de falhas, Analytics e publicidade já processados:** seguem as políticas e os prazos dos respectivos fornecedores e obrigações legais.
- **Compras e histórico de pagamento:** permanecem sob responsabilidade do Google Play.

## Assinatura Premium

**Excluir a conta não cancela a assinatura Premium.** Para evitar novas cobranças, cancele-a separadamente em **Google Play > Pagamentos e assinaturas > Assinaturas > MaoDesign**.

## Mais informações

- [Política de Privacidade]({{ '/Legal/privacy-policy/' | relative_url }})
- [Termos de Uso]({{ '/Legal/terms-of-service/' | relative_url }})
- [Central de Ajuda]({{ '/Legal/help/' | relative_url }})

**Contato:** [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com)
