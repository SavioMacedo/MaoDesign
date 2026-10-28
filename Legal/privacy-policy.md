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

O responsável pelo tratamento de dados pessoais no MaoDesign é **SAVIO DE PAIVA MACEDO**. Endereço: R. Eng. Geraldo Magela de Mattos Sanábio, 1000, apto. 201, Recanto da Mata, Juiz de Fora - MG, 36083-802, Brasil. Contato: [saviomacedo718+maodesign@gmail.com](mailto:saviomacedo718+maodesign@gmail.com).

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

O Firebase Crashlytics recebe diagnósticos para manter segurança e estabilidade. Conforme a falha, podem incluir versão do app, modelo e estado técnico do dispositivo, versão do Android, identificadores técnicos da instalação, pilha de execução, mensagem de erro e contexto técnico. Mensagens produzidas por operações de arquivo podem incluir nomes ou caminhos locais; por isso, não afirmamos que todo relatório seja anônimo ou livre dessas informações. O MaoDesign não solicita nem anexa intencionalmente o conteúdo dos arquivos aos relatórios. Em builds Debug, relatórios não são enviados ao Crashlytics.

Esse tratamento é separado da medição de uso e da publicidade contextual. O controle **Enviar relatórios de erros** fica ativo por padrão e pode ser desativado em Configurações. Desativá-lo não exige mudar a opção de medição; mudar essa opção não altera, por si só, o controle dos relatórios de erro. O bloqueio integral do SDK pode exigir reabrir o aplicativo.

A base adotada para diagnósticos é o legítimo interesse em segurança e estabilidade, sujeito à necessidade, à proporcionalidade, às expectativas do titular e às salvaguardas aplicáveis. O responsável deve manter documentada essa avaliação. Você pode se opor ao tratamento e pedir esclarecimentos pelo contato desta política.

## 5. Analytics opcional

Em **Configurações > Medição de uso**, escolha **Somente essencial** para deixar a medição de uso desligada ou **Permitir medição** para autorizar a coleta opcional do Firebase Analytics. Quando a medição é permitida, o Firebase Analytics pode receber eventos de uso, telas acessadas, resultado de operações, versão, idioma e propriedades técnicas, como quantidade de arquivos, formato preferido e nível da assinatura. A base desse tratamento é o consentimento, e a coleta permanece desabilitada até uma escolha explícita que a autorize. A escolha pode ser revogada em Configurações.

Se uma versão anterior tiver salvo o valor **Completo**, ele será normalizado para **Permitir medição**. Isso não representa consentimento para personalização de anúncios.

O MaoDesign **não define o identificador da conta Firebase como identificador de usuário no Analytics**. O SDK pode usar identificadores próprios da instalação ou instância do aplicativo. Isso não significa que toda informação técnica seja anônima.

Com **Somente essencial**, a medição do Firebase Analytics fica desabilitada. Isso não impede diagnósticos autorizados pelo controle separado nem anúncios contextuais, cujo tratamento de dados pelos prestadores não depende da opção de medição.

As configurações vigentes da conta Analytics também permitem usos pelo Google para melhoria de produtos e serviços, contribuições de estimativas e insights de negócios, suporte técnico e recomendações para a empresa. No compartilhamento para produtos e serviços próprios, o Google atua como controlador independente, conforme seus [termos de proteção de dados entre controladores](https://support.google.com/analytics/answer/9012600?hl=pt-BR). Esses usos não autorizam personalização de anúncios pelo MaoDesign. Desativar a medição no app impede novos envios opcionais do aplicativo, sem apagar automaticamente o histórico já recebido pelos prestadores.

## 6. Publicidade contextual

Usuários Free podem ver anúncios contextuais do **Unity LevelPlay/IronSource** e redes parceiras. A integração inclui **AdQuality**, componente de qualidade e medição dos anúncios. O MaoDesign não usa a opção de medição para personalizar anúncios nem solicita consentimento para essa finalidade. Para entregar anúncios contextuais, medir desempenho e proteger o serviço contra fraude ou abuso, os prestadores podem tratar IP, informações técnicas do aparelho, identificadores de instalação, visualizações, cliques e informações de impressão e receita publicitária. As categorias e os sinais tratados podem variar conforme SDK, plataforma, rede e configuração. O MaoDesign configura restrições de privacidade antes da inicialização, incluindo limitação do identificador de dispositivo pela Unity e desativação da coleta do identificador publicitário pelo Firebase Analytics. Essas restrições não significam ausência de todos os identificadores ou de armazenamento/acesso pelo SDK. A ausência de personalização não dispensa autorizações exigidas pela legislação para armazenamento ou acesso a informações no dispositivo. Premium remove anúncios.

## 7. Compras e assinaturas

O **Google Play Billing** processa pagamento e histórico de compras. O MaoDesign recebe produto, estado e token técnico da compra para liberar e restaurar Premium, mas não recebe o número completo do cartão. Excluir a conta MaoDesign não cancela uma assinatura; cancele-a separadamente em **Google Play > Pagamentos e assinaturas > Assinaturas**.

No atendimento de compras, cancelamentos e reembolsos, podemos tratar o nome e e-mail usados no contato, número do pedido GPA, data, valor e informações mínimas de confirmação. A finalidade é localizar a transação, executar o atendimento e cumprir obrigações legais ou exercer direitos. Não solicitamos senha ou número completo de cartão. Um relato opcional de expectativas e dificuldades é usado para orientar melhorias e não é condição para tratar a solicitação.

## 8. Prestadores e transferência

O MaoDesign não vende dados pessoais. Dados podem ser processados por:

- **Google/Firebase:** autenticação e Firestore sob as condições aplicáveis do Google Cloud, e Crashlytics sob as condições específicas do Firebase;
- **Google Analytics:** medição opcional, com termos de tratamento próprios; os usos adicionais descritos na seção 5 seguem as condições correspondentes;
- **Google Play:** distribuição, compras, assinaturas e avaliação no app;
- **Google/Gmail:** recebimento e armazenamento das mensagens de atendimento;
- **Unity LevelPlay/IronSource, AdQuality e redes parceiras:** publicidade e sua medição no plano gratuito. A Unity pode atuar como controladora independente nas finalidades próprias descritas em seu contrato e política.

O banco Firestore está configurado na região São Paulo, Brasil (`southamerica-east1`); a autenticação Firebase é processada nos Estados Unidos. A região de um banco não significa que todos os serviços, suporte e suboperadores processem dados apenas no Brasil. Os demais prestadores também podem usar infraestrutura em outros países.

Transferências internacionais devem observar a hipótese legal e o mecanismo aplicável a cada serviço e destino. Os instrumentos não têm escopo único: o [Cloud DPA](https://cloud.google.com/terms/data-processing-addendum), os [termos de tratamento do Firebase](https://firebase.google.com/terms/data-processing-terms/), os [termos do Analytics](https://business.safety.google/adsprocessorterms/) e o [DPA da Unity](https://unity.com/legal/unity-data-processing-addendum-dpa) tratam de serviços e papéis diferentes. O contrato do Analytics não substitui os demais, e não se presume que uma caixa Gmail esteja coberta pelo DPA do Workspace. Pelo canal desta política, você pode solicitar informações sobre destinatários, países e salvaguardas pertinentes. O uso de um prestador não afasta a responsabilidade do MaoDesign sobre o tratamento que realiza ou determina. Consulte também a [privacidade do Firebase](https://firebase.google.com/support/privacy), a [privacidade do Google](https://policies.google.com/privacy) e a [privacidade da Unity](https://unity.com/legal/game-player-and-app-user-privacy-policy).

O uso adicional dos **Dados de Serviço do Firebase** para análises, recomendações e melhoria de serviços Google não Firebase permanece habilitado. Essa categoria, gerada na prestação e administração do Firebase, é distinta dos dados do cliente enviados pelo aplicativo e segue os termos e a política do Google.

## 9. Retenção e exclusão

| Categoria | Retenção e critério de encerramento |
| --- | --- |
| Conteúdo privado e preferências locais | Até sua remoção, limpeza dos dados do app ou desinstalação. Arquivos exportados permanecem no destino escolhido. |
| Identidade Firebase e marcadores vinculados | Até a exclusão ou encerramento da finalidade. Segundo o Firebase, IPs são mantidos por algumas semanas; outros dados de autenticação são removidos em até 180 dias após o pedido de exclusão ao provedor. |
| Dados de suporte e compra tratados no atendimento | Pelo tempo necessário à resolução, às obrigações legais e ao exercício de direitos. O responsável revisa mensalmente atendimentos encerrados para eliminar ou anonimizar o que deixou de ser necessário. Uma retenção excepcional deve ter motivo e critério de encerramento registrados. |
| Firebase Analytics | Configuração verificada para esta edição: 2 meses para dados de eventos e 14 meses para dados no nível do usuário, com reinício por atividade ativo para o período no nível do usuário. Isso descreve a configuração do Analytics e não define retenção de relatórios agregados ou de outros serviços. |
| Firebase Crashlytics | O provedor informa 90 dias antes de iniciar a remoção dos diagnósticos e identificadores dos sistemas ativos e backups; isso não é prazo máximo de eliminação. |
| Publicidade contextual e AdQuality | Conforme finalidade, obrigações e critérios aplicáveis aos dados tratados pelos prestadores, descritos em suas políticas e informados mediante solicitação. Não há confirmação de um prazo único para todas as redes. Pedidos de exclusão e oposição são avaliados também em relação aos destinatários. |
| Registros de pagamento do Google Play | Mantidos pelo Google Play conforme suas obrigações próprias. Isso é distinto dos dados de atendimento mantidos pelo MaoDesign. |

Não adotamos nesta política um prazo único para categorias com finalidades diferentes. Você pode solicitar os critérios e informações sobre o tratamento aplicável ao seu caso. Retenções necessárias por obrigação legal ou exercício de direitos serão informadas com o respectivo motivo.

O fluxo do aplicativo remove os marcadores Firestore abrangidos e depois exclui a identidade Firebase; falhas podem deixar etapas incompletas. Após a exclusão da identidade, o app tenta limpar as credenciais locais, mas essa limpeza pode falhar mesmo quando o app informa que a exclusão foi concluída. Arquivos e favoritos locais são preservados. O Firebase pode exigir login recente. Se houver erro ou dúvida sobre uma etapa, tente novamente ou solicite atendimento.

Esse fluxo não confirma a exclusão de todo histórico já processado por Analytics, Crashlytics ou prestadores de publicidade. Desativar coleta afeta envios futuros e não equivale a apagar dados remotos. Pedidos relativos a identificadores técnicos dependem da possibilidade de localizar os registros com os dados mínimos pertinentes; não exigimos criar uma conta apenas para exercer direitos. Quando não for possível localizar ou eliminar um dado, explicaremos a limitação e as medidas cabíveis. Consulte os [detalhes da exclusão]({{ '/Legal/delete-account/' | relative_url }}).

## 10. Direitos e escolhas

Você pode usar o app sem login, alterar o nível de coleta, controlar relatórios de erros separadamente, sair e excluir a conta. Pelo contato **saviomacedo718+maodesign@gmail.com**, pode solicitar confirmação de tratamento, acesso, correção, informação sobre compartilhamento, revogação de consentimento, oposição e, quando aplicáveis, portabilidade, anonimização, bloqueio ou eliminação.

Podemos confirmar a identidade com os dados mínimos necessários antes de atender pedidos vinculados a uma conta. O atendimento é gratuito e observa os prazos e limites legais. Quando não for possível atender imediatamente, informaremos os motivos e a providência cabível. Você também pode recorrer à Autoridade Nacional de Proteção de Dados e aos órgãos de defesa do consumidor.

## 11. Público, segurança e alterações

O MaoDesign é destinado a pessoas com 16 anos ou mais. Na Google Play, os grupos de público-alvo são 16–17 e 18+. A classificação de conteúdo **Todos** (**Livre**) da loja é distinta dessa indicação por idade. O app não é direcionado especificamente a pessoas menores de 16 anos. Para usuários de 16–17 anos, responsáveis devem acompanhar contas Google e compras conforme as regras aplicáveis. Usamos HTTPS dos SDKs, regras Firestore por usuário e controles de consentimento, sem afirmar garantias além das efetivamente fornecidas pela plataforma e pelos prestadores.

Esta política pode mudar quando funcionalidades, fornecedores ou leis mudarem. Alterações relevantes podem exigir nova escolha de consentimento.
