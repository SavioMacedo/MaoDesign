---
layout: legal
title: "Política de Privacidade"
description: "Como o MaoDesign trata dados no aplicativo Android"
lang: pt-BR
permalink: /Legal/privacy-policy/
---

# Política de Privacidade do MaoDesign

**Última atualização:** 27 de outubro de 2026

**Versão:** 2.2

**Aplicável a:** MaoDesign para Android, a partir da versão que implementar os controles de coleta e publicidade descritos nesta política

O responsável pelo tratamento de dados pessoais no MaoDesign é **SAVIO DE PAIVA MACEDO**. Endereço: R. Eng. Geraldo Magela de Mattos Sanábio, 1000, apto. 201, Recanto da Mata, Juiz de Fora - MG, 36083-802, Brasil. Contato: [saviomacedo.dev@gmail.com](mailto:saviomacedo.dev@gmail.com).

## 1. Resumo

- As funções principais podem ser usadas sem conta.
- Arquivos de bordado, miniaturas, favoritos, recentes e preferências permanecem no dispositivo e não são enviados a um servidor próprio.
- O login Google é opcional e usa Firebase Authentication.
- Relatórios técnicos de falhas têm controle independente e ficam ativos por padrão. A medição de uso é opcional e pode ser ligada ou desligada nas Configurações.
- Usuários Free veem anúncios contextuais, sem personalização em qualquer opção de medição. Premium remove anúncios.
- Em **Configurações > Medição de uso**, as opções são **Somente essencial** e **Permitir medição**. Um valor legado **Completo** é normalizado para **Permitir medição**.
- A conta pode ser excluída em **Perfil > Excluir conta** ou pela [página pública de exclusão]({{ '/Legal/delete-account/' | relative_url }}).

## 2. Dados locais

O aplicativo pode manter no dispositivo:

- arquivos escolhidos ou produzidos, miniaturas e metadados técnicos;
- favoritos e histórico de arquivos recentes;
- idioma, modo de visualização, bastidor e outras preferências;
- estado de dicas, avaliação e consentimento;
- estado da assinatura e token técnico de compra fornecido pelo Google Play.

Esses dados operam o editor e preservam preferências. Backup e transferência automática dos dados privados pelo Android são desabilitados. Desinstalar o aplicativo ou limpar seus dados pode apagar o conteúdo privado do app; arquivos exportados para outros destinos continuam sujeitos à gestão desses destinos. Ao compartilhar ou exportar, você escolhe o aplicativo externo que receberá o arquivo.

## 3. Conta Google e Firebase

Ao escolher **Entrar com Google**, Google Credential Manager e Firebase Authentication processam o identificador Firebase, nome, e-mail, foto e tokens técnicos de sessão. O MaoDesign não recebe nem armazena sua senha Google.

Para usuários autenticados, o Firebase Firestore pode manter marcadores em `users/{uid}/aha_markers`, com tipo do momento, data/hora do servidor e metadados técnicos. Eles evitam prompts repetidos e indicam a conclusão de fluxos relevantes.

## 4. Relatórios de falhas e controle independente

O Firebase Crashlytics recebe diagnósticos para manter segurança e estabilidade. Conforme a falha, podem incluir versão do app, modelo e estado técnico do dispositivo, versão do Android, pilha de execução, mensagem de erro e contexto técnico. O MaoDesign não adiciona intencionalmente o conteúdo dos arquivos aos relatórios. Em builds Debug, relatórios não são enviados ao Crashlytics.

Esse tratamento é separado da medição de uso e da publicidade contextual. O controle **Enviar relatórios de erros** fica ativo por padrão e pode ser desativado em Configurações. Desativá-lo não exige mudar a opção de medição; mudar essa opção não altera, por si só, o controle dos relatórios de erro. O bloqueio integral do SDK pode exigir reabrir o aplicativo.

A base adotada para diagnósticos é o legítimo interesse em segurança e estabilidade, sujeito à necessidade, à proporcionalidade, às expectativas do titular e às salvaguardas aplicáveis. O responsável deve manter documentada essa avaliação. Você pode se opor ao tratamento e pedir esclarecimentos pelo contato desta política.

## 5. Analytics opcional

Em **Configurações > Medição de uso**, escolha **Somente essencial** para deixar a medição de uso desligada ou **Permitir medição** para autorizar a coleta opcional do Firebase Analytics. Quando a medição é permitida, o Firebase Analytics pode receber eventos de uso, telas acessadas, resultado de operações, versão, idioma e propriedades técnicas, como quantidade de arquivos, formato preferido e nível da assinatura. A base desse tratamento é o consentimento, e a coleta permanece desabilitada até uma escolha explícita que a autorize. A escolha pode ser revogada em Configurações.

Se uma versão anterior tiver salvo o valor **Completo**, ele será normalizado para **Permitir medição**. Isso não representa consentimento para personalização de anúncios.

O MaoDesign **não define o identificador da conta Firebase como identificador de usuário no Analytics**. O SDK pode usar identificadores próprios da instalação ou instância do aplicativo. Isso não significa que toda informação técnica seja anônima.

Com **Somente essencial**, a medição do Firebase Analytics fica desabilitada. Isso não impede diagnósticos autorizados pelo controle separado nem anúncios contextuais, cujo tratamento de dados pelos prestadores não depende da opção de medição.

## 6. Publicidade contextual

Usuários Free podem ver anúncios contextuais do **Unity LevelPlay/IronSource** e redes parceiras. O MaoDesign não usa a opção de medição para personalizar anúncios nem solicita consentimento para essa finalidade. Para entregar anúncios contextuais, medir seu desempenho técnico e proteger o serviço contra fraude ou abuso, os prestadores podem tratar o endereço IP, informações e características técnicas do aparelho e dados sobre a entrega e interação com anúncios, como visualizações e cliques. As categorias e os sinais tratados podem variar conforme SDK, plataforma, rede e payload. O MaoDesign configura as opções de privacidade disponíveis nos SDKs antes de inicializá-los, incluindo um sinal para limitar o uso do identificador de dispositivo pela Unity e a desativação da coleta do identificador de publicidade pelo Firebase Analytics. Essas opções não garantem ausência de identificadores em todos os SDKs, sistemas, parceiros ou payloads. Premium remove anúncios.

## 7. Compras e assinaturas

O **Google Play Billing** processa pagamento e histórico de compras. O MaoDesign recebe produto, estado e token técnico da compra para liberar e restaurar Premium, mas não recebe o número completo do cartão. Excluir a conta MaoDesign não cancela uma assinatura; cancele-a separadamente em **Google Play > Pagamentos e assinaturas > Assinaturas**.

No atendimento de compras, cancelamentos e reembolsos, podemos tratar o nome e e-mail usados no contato, número do pedido GPA, data, valor e informações mínimas de confirmação. A finalidade é localizar a transação, executar o atendimento e cumprir obrigações legais ou exercer direitos. Não solicitamos senha ou número completo de cartão. Um relato opcional de expectativas e dificuldades é usado para orientar melhorias e não é condição para tratar a solicitação.

## 8. Prestadores e transferência

O MaoDesign não vende dados pessoais. Dados podem ser processados por:

- **Google/Firebase:** autenticação, Firestore, Crashlytics e Analytics;
- **Google Play:** distribuição, compras, assinaturas e avaliação no app;
- **Unity LevelPlay/IronSource e redes parceiras:** anúncios contextuais para usuários Free.

Esses prestadores podem processar dados em outros países. Transferências internacionais devem observar os mecanismos admitidos pela legislação aplicável e os instrumentos contratuais pertinentes. O uso de um prestador não afasta as responsabilidades do MaoDesign quanto ao tratamento que realiza ou determina. Informações sobre os prestadores estão em [privacidade e segurança do Firebase](https://firebase.google.com/support/privacy), [privacidade do Google](https://policies.google.com/privacy) e [privacidade da Unity](https://unity.com/legal/privacy-policy).

## 9. Retenção e exclusão

| Categoria | Retenção e critério de encerramento |
| --- | --- |
| Conteúdo privado e preferências locais | Até sua remoção, limpeza dos dados do app ou desinstalação. Arquivos exportados permanecem no destino escolhido. |
| Identidade Firebase e marcadores vinculados | Enquanto necessários à conta e aos fluxos relacionados; a exclusão concluída remove a identidade e os marcadores abrangidos pelo fluxo. |
| Dados de suporte e compra tratados no atendimento | Pelo tempo necessário à resolução, ao cumprimento de obrigações legais e ao exercício regular de direitos. Encerradas essas finalidades, os dados devem ser eliminados ou anonimizados quando cabível. |
| Firebase Analytics | Configuração verificada para esta edição: 2 meses para dados de eventos e 14 meses para dados no nível do usuário, com reinício por atividade ativo para o período no nível do usuário. Isso descreve a configuração do Analytics e não define retenção de relatórios agregados ou de outros serviços. |
| Diagnósticos e publicidade contextual | Conforme a finalidade, as configurações e a retenção efetivamente aplicáveis a cada serviço. Pedidos de exclusão e oposição também são avaliados em relação aos prestadores; a simples referência às políticas deles não afasta direitos do titular. |
| Registros de pagamento do Google Play | Mantidos pelo Google Play conforme suas obrigações próprias. Isso é distinto dos dados de atendimento mantidos pelo MaoDesign. |

Não adotamos nesta política um prazo único para categorias com finalidades diferentes. Você pode solicitar os critérios e informações sobre o tratamento aplicável ao seu caso. Retenções necessárias por obrigação legal ou exercício de direitos serão informadas com o respectivo motivo.

Ao concluir a exclusão da conta pelo aplicativo, os marcadores Firestore abrangidos pelo fluxo são removidos, a identidade Firebase é excluída e as credenciais locais são limpas. Arquivos e favoritos locais são preservados. O Firebase pode exigir login recente. Se houver falha, não presuma que todas as etapas terminaram: tente novamente ou solicite atendimento. Esse fluxo não confirma a exclusão de todos os dados já processados por Crashlytics, Analytics ou prestadores de publicidade. Você pode pedir providências sobre outros dados associados pelo mesmo canal; quando aplicável, avaliaremos pedidos em relação aos prestadores. Consulte os [detalhes da exclusão]({{ '/Legal/delete-account/' | relative_url }}).

## 10. Direitos e escolhas

Você pode usar o app sem login, alterar o nível de coleta, controlar relatórios de erros separadamente, sair e excluir a conta. Pelo contato **saviomacedo.dev@gmail.com**, pode solicitar confirmação de tratamento, acesso, correção, informação sobre compartilhamento, revogação de consentimento, oposição e, quando aplicáveis, portabilidade, anonimização, bloqueio ou eliminação.

Podemos confirmar a identidade com os dados mínimos necessários antes de atender pedidos vinculados a uma conta. O atendimento é gratuito e observa os prazos e limites legais. Quando não for possível atender imediatamente, informaremos os motivos e a providência cabível. Você também pode recorrer à Autoridade Nacional de Proteção de Dados e aos órgãos de defesa do consumidor.

## 11. Público, segurança e alterações

O MaoDesign é destinado a pessoas com 16 anos ou mais. Na Google Play, os grupos de público-alvo são 16–17 e 18+. A classificação de conteúdo **Todos** (**Livre**) da loja é distinta dessa indicação por idade. O app não é direcionado especificamente a pessoas menores de 16 anos. Para usuários de 16–17 anos, responsáveis devem acompanhar contas Google e compras conforme as regras aplicáveis. Usamos HTTPS dos SDKs, regras Firestore por usuário e controles de consentimento, sem afirmar garantias além das efetivamente fornecidas pela plataforma e pelos prestadores.

Esta política pode mudar quando funcionalidades, fornecedores ou leis mudarem. Alterações relevantes podem exigir nova escolha de consentimento.
