# 📋 Documentos Legais - MaoDesign

Este diretório contém todos os documentos legais do aplicativo MaoDesign, incluindo políticas de privacidade e termos de uso.

## 📁 Estrutura de Arquivos

```
Legal/
├── README.md                    # Este arquivo
├── privacy-policy.md           # Política de Privacidade (Português)  
├── privacy-policy-en.md        # Privacy Policy (English)
├── privacy-policy-es.md        # Política de Privacidad (Español)
└── terms-of-service.md         # Termos de Uso (será criado)
```

## 🌐 Acesso Online

Estes documentos são acessíveis online através do repositório GitHub:

### URLs de Acesso Direto

#### Política de Privacidade
- **Português**: `https://raw.githubusercontent.com/SavioMacedo/MaoDesign/refs/heads/main/Legal/privacy-policy.md`
- **English**: `https://raw.githubusercontent.com/SavioMacedo/MaoDesign/refs/heads/main/Legal/privacy-policy-en.md`
- **Español**: `https://raw.githubusercontent.com/SavioMacedo/MaoDesign/refs/heads/main/Legal/privacy-policy-es.md`

#### Termos de Uso
- **Português**: `https://raw.githubusercontent.com/SavioMacedo/MaoDesign/refs/heads/main/Legal/terms-of-service.md`
- **English**: `https://raw.githubusercontent.com/SavioMacedo/MaoDesign/refs/heads/main/Legal/terms-of-service-en.md`
- **Español**: `https://raw.githubusercontent.com/SavioMacedo/MaoDesign/refs/heads/main/Legal/terms-of-service-es.md`

## 📱 Integração no Aplicativo

### Como Implementar no App

1. **Criar Service para Documentos Legais**
```csharp
// Services/LegalDocumentService.cs
public interface ILegalDocumentService
{
    Task<string> GetPrivacyPolicyAsync(string language = "pt");
    Task<string> GetTermsOfServiceAsync(string language = "pt");
}
```

2. **URLs de Produção**
```csharp
private const string PRIVACY_POLICY_PT = "https://raw.githubusercontent.com/SavioMacedo/MaoDesign/refs/heads/main/Legal/privacy-policy.md";
private const string PRIVACY_POLICY_EN = "https://raw.githubusercontent.com/SavioMacedo/MaoDesign/refs/heads/main/Legal/privacy-policy-en.md";
private const string PRIVACY_POLICY_ES = "https://raw.githubusercontent.com/SavioMacedo/MaoDesign/refs/heads/main/Legal/privacy-policy-es.md";
```

3. **Páginas no App**
```csharp
// Pages/Settings/LegalDocumentsPage.xaml
// Mostrar documentos com WebView ou texto formatado
```

## ✅ Compliance

### LGPD (Brasil)
- ✅ Identificação da empresa
- ✅ Finalidades do tratamento
- ✅ Direitos dos titulares
- ✅ Contato do encarregado (DPO)
- ✅ Períodos de retenção
- ✅ Compartilhamento de dados

### GDPR (União Europeia)
- ✅ Bases legais para processamento
- ✅ Direitos dos titulares
- ✅ Transferências internacionais
- ✅ Contato do DPO
- ✅ Políticas de cookies
- ✅ Proteção de menores

### Boas Práticas
- ✅ Linguagem clara e acessível
- ✅ Múltiplos idiomas (PT, EN, ES)
- ✅ Versionamento e controle de mudanças
- ✅ Acesso online direto
- ✅ Formato estruturado e legível

## 🔄 Controle de Versões

### Histórico de Versões
- **v1.0** (19/06/2025): Versão inicial
  - Política de Privacidade completa
  - Compliance LGPD/GDPR
  - Suporte a 3 idiomas

### Processo de Atualização
1. **Modificar arquivo** no repositório
2. **Incrementar versão** no documento
3. **Atualizar data** de última modificação
4. **Notificar usuários** através do app (se mudança material)
5. **Commit e push** para disponibilizar online

## 🎯 Próximos Passos

### Issue #41 ✅ (Concluída)
- [x] Criar Política de Privacidade
- [x] Compliance LGPD/GDPR
- [x] Múltiplos idiomas
- [x] Estrutura versionada

### Issue #42 🔄 (Em Progresso)
- [ ] Criar Termos de Uso
- [ ] Definir direitos e responsabilidades
- [ ] Licenciamento do aplicativo
- [ ] Limitações e garantias

### Implementação no App 📋 (Planejado)
- [ ] Criar LegalDocumentService
- [ ] Implementar páginas de visualização
- [ ] Integrar nas configurações
- [ ] Adicionar aceite obrigatório no primeiro uso

## 📞 Contato

Para questões sobre os documentos legais:
- **Email**: saviom.cedo@hotmail.com
- **Desenvolvedor**: Savio Macedo
- **Função**: Encarregado de Dados (DPO)

---

<div align="center">

**Última Atualização**: 19 de junho de 2025  
**Issue**: #41 - Política de Privacidade ✅

</div>
