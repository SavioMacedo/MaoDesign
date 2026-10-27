---
layout: legal
title: "Exclusão de Conta"
description: "Como excluir sua conta e dados vinculados no MaoDesign"
lang: pt-BR
permalink: /Legal/delete-account/
---

# Exclusão de Conta no MaoDesign

**Última atualização:** 27 de outubro de 2026

**Versão:** 2.2

## Excluir pelo aplicativo

Se você consegue entrar na conta:

1. Abra o MaoDesign.
2. Acesse **Perfil**.
3. Toque em **Excluir conta**.
4. Leia o aviso e confirme **Excluir conta**.
5. Se o Firebase solicitar autenticação recente, entre novamente e repita a operação.

Quando a operação termina com sucesso, o MaoDesign remove os marcadores Firestore abrangidos pelo fluxo, exclui sua identidade Firebase e limpa as credenciais locais de login. Se uma etapa falhar, a exclusão pode ficar incompleta: tente novamente ou solicite atendimento por e-mail. Uma mensagem de erro não confirma a conclusão da exclusão.

## Solicitar por e-mail

Se você não consegue usar o fluxo do aplicativo, envie a solicitação para [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com) com:

- assunto **Exclusão de conta MaoDesign**;
- endereço da conta Google usada no MaoDesign;
- uma breve confirmação de que deseja excluir permanentemente a conta.

Não envie senha, token, documento pessoal ou dados de pagamento. Poderemos responder pelo mesmo endereço para confirmar que a solicitação pertence ao titular. Confirmaremos o recebimento e trataremos o pedido nos prazos legais aplicáveis, informando a conclusão ou os motivos de eventual retenção ou impossibilidade de atendimento.

## Dados excluídos

- identidade e identificador da conta Firebase;
- nome, e-mail e foto mantidos no perfil Firebase do MaoDesign;
- marcadores de uso armazenados em `users/{uid}/aha_markers` no Firestore;
- credenciais locais da sessão MaoDesign.

## Dados preservados ou tratados separadamente

- **Arquivos de bordado, miniaturas, favoritos, recentes e preferências locais:** permanecem no dispositivo porque não pertencem à conta em nuvem. Limpar os dados do aplicativo ou desinstalá-lo pode remover seu conteúdo privado; arquivos exportados para outros destinos devem ser gerenciados nesses destinos.
- **Relatórios de falhas, Analytics e publicidade já processados:** a exclusão da conta Firebase não apaga automaticamente todos os dados já processados por Crashlytics, Analytics ou prestadores de publicidade. Para o Firebase Analytics, a configuração verificada nesta edição é de 2 meses para dados de eventos e 14 meses para dados no nível do usuário, com reinício por atividade ativo para a retenção no nível do usuário. Essa configuração não define retenção de relatórios agregados ou de outros serviços. Pedidos de exclusão e oposição são avaliados conforme a possibilidade de vinculação ao titular, a legislação e retenções aplicáveis; quando couber, solicitaremos providências aos prestadores. A referência às políticas deles não afasta os direitos do titular.
- **Compras e histórico de pagamento:** o Google Play mantém seus próprios registros legais. Dados de atendimento mantidos pelo MaoDesign são tratados separadamente e conservados somente enquanto necessários à finalidade, obrigação legal ou exercício regular de direitos, com informação do motivo quando houver retenção.

## Assinatura Premium

**Excluir a conta não cancela a assinatura Premium.** Para evitar novas cobranças, cancele-a separadamente em **Google Play > Pagamentos e assinaturas > Assinaturas > MaoDesign**.

No cancelamento comum, o acesso continua até o fim do período já pago e a assinatura não se renova, sem reembolso automático. Isso preserva os direitos legais de arrependimento e demais hipóteses de restituição. Para pedir análise de reembolso, contate o suporte ou o Google Play; a exclusão da conta não precisa aguardar o envio de feedback sobre o aplicativo.

## Mais informações

- [Política de Privacidade]({{ '/Legal/privacy-policy/' | relative_url }})
- [Termos de Uso]({{ '/Legal/terms-of-service/' | relative_url }})
- [Central de Ajuda]({{ '/Legal/help/' | relative_url }})

**Responsável:** SAVIO DE PAIVA MACEDO

**Endereço:** R. Eng. Geraldo Magela de Mattos Sanábio, 1000, apto. 201, Recanto da Mata, Juiz de Fora - MG, 36083-802, Brasil

**Contato:** [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com)
