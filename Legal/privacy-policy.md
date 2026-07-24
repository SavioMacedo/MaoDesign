---
layout: legal
title: "Política de Privacidade"
description: "Como o MaoDesign trata dados no aplicativo Android"
lang: pt-BR
permalink: /Legal/privacy-policy/
---

# Política de Privacidade do MaoDesign

**Última atualização:** 23 de julho de 2026

**Versão:** 2.0

**Aplicável ao:** MaoDesign para Android, versão 18 e posteriores

O responsável pelo MaoDesign é **Savio Macedo**. Contato: [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com).

## 1. Resumo

- As funções principais podem ser usadas sem conta.
- Arquivos de bordado, miniaturas, favoritos, recentes e preferências permanecem no dispositivo e não são enviados a um servidor próprio.
- O login Google é opcional e usa Firebase Authentication.
- Relatórios técnicos de falhas compõem o nível Essencial. Firebase Analytics e personalização de anúncios dependem da escolha feita no aplicativo.
- A escolha pode ser alterada em **Configurações > Nível de Coleta de Dados**.
- A conta pode ser excluída em **Perfil > Excluir conta** ou pela [página pública de exclusão]({{ '/Legal/delete-account/' | relative_url }}).

## 2. Dados locais

O aplicativo pode manter no dispositivo:

- arquivos escolhidos ou produzidos, miniaturas e metadados técnicos;
- favoritos e histórico de arquivos recentes;
- idioma, modo de visualização, bastidor e outras preferências;
- estado de dicas, avaliação e consentimento;
- estado da assinatura e token técnico de compra fornecido pelo Google Play.

Esses dados operam o editor e preservam preferências. Backup e transferência automática dos dados privados pelo Android são desabilitados. Desinstalar o aplicativo ou limpar seus dados pode apagar esse conteúdo. Ao compartilhar ou exportar, você escolhe o aplicativo externo que receberá o arquivo.

## 3. Conta Google e Firebase

Ao escolher **Entrar com Google**, Google Credential Manager e Firebase Authentication processam o identificador Firebase, nome, e-mail, foto e tokens técnicos de sessão. O MaoDesign não recebe nem armazena sua senha Google.

Para usuários autenticados, o Firebase Firestore pode manter marcadores em `users/{uid}/aha_markers`, com tipo do momento, data/hora do servidor e metadados técnicos. Eles evitam prompts repetidos e indicam a conclusão de fluxos relevantes.

## 4. Relatórios de falhas — Essencial

O Firebase Crashlytics recebe diagnósticos para manter segurança e estabilidade. Conforme a falha, podem incluir versão do app, modelo e estado técnico do dispositivo, versão do Android, pilha de execução, mensagem de erro e contexto técnico. O MaoDesign não adiciona intencionalmente o conteúdo dos arquivos aos relatórios. Em builds Debug, relatórios não são enviados ao Crashlytics.

## 5. Analytics opcional

Ao escolher **Analytics** ou **Completo**, o Firebase Analytics pode receber eventos de uso, telas acessadas, resultado de operações, versão, idioma e propriedades técnicas. Quando o usuário está autenticado, o identificador Firebase pode ser associado ao Analytics. A coleta permanece desabilitada até uma escolha explícita.

## 6. Publicidade opcional

Usuários gratuitos podem ver anúncios do **Unity LevelPlay/IronSource** e redes parceiras. Esses fornecedores podem processar identificador de publicidade, endereço IP, características do dispositivo, região aproximada e interações com anúncios. O MaoDesign só concede consentimento para dados e personalização de anúncios no nível **Completo**; nos demais níveis solicita tratamento limitado quando suportado. Premium remove anúncios.

## 7. Compras e assinaturas

O **Google Play Billing** processa pagamento e histórico de compras. O MaoDesign recebe produto, estado e token técnico da compra para liberar e restaurar Premium, mas não recebe o número completo do cartão. Excluir a conta MaoDesign não cancela uma assinatura; cancele-a separadamente em **Google Play > Pagamentos e assinaturas > Assinaturas**.

## 8. Prestadores e transferência

O MaoDesign não vende dados pessoais. Dados podem ser processados por:

- **Google/Firebase:** autenticação, Firestore, Crashlytics e Analytics;
- **Google Play:** distribuição, compras, assinaturas e avaliação no app;
- **Unity LevelPlay/IronSource e redes parceiras:** publicidade para usuários gratuitos.

Esses prestadores podem processar dados em outros países e aplicam seus próprios prazos, medidas de segurança e obrigações legais.

## 9. Retenção e exclusão

- Dados locais permanecem até serem removidos, os dados do app serem limpos ou o app ser desinstalado.
- Conta Firebase e marcadores vinculados permanecem enquanto a conta existir.
- Crashlytics, Analytics, publicidade e compras seguem os prazos dos respectivos fornecedores e exigências legais.

Ao excluir a conta pelo aplicativo, os marcadores Firestore são removidos, a identidade Firebase é excluída e as credenciais locais são limpas. Arquivos e favoritos locais são preservados. O Firebase pode exigir login recente. Consulte os [detalhes da exclusão]({{ '/Legal/delete-account/' | relative_url }}).

## 10. Direitos e escolhas

Você pode usar o app sem login, alterar o nível de coleta, sair da conta e excluir a conta. Solicitações de acesso, correção, oposição ou exclusão podem ser enviadas para **saviomacedo.dev@gmail.com**. Podemos confirmar a identidade antes de atender pedidos vinculados a uma conta.

## 11. Crianças, segurança e alterações

O MaoDesign não é direcionado especificamente a crianças. Responsáveis devem supervisionar contas Google e compras. Usamos HTTPS dos SDKs, regras Firestore por usuário e controles de consentimento, sem afirmar garantias além das efetivamente fornecidas pela plataforma e pelos prestadores.

Esta política pode mudar quando funcionalidades, fornecedores ou leis mudarem. Alterações relevantes podem exigir nova escolha de consentimento.
