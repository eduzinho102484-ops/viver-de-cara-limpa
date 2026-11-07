# Viver de Cara Limpa — Site institucional (etapa 1: interface pública)

React + Vite. Somente a interface pública; painel administrativo e banco de dados ficam para a próxima etapa.

## Como rodar

```bash
npm install
cp .env.example .env   # preencha com os dados OFICIAIS
npm run dev
```

Build de produção: `npm run build` (saída em `dist/`).

## Dados oficiais (arquivo `.env`)

| Variável | Uso |
|---|---|
| `VITE_WHATSAPP_NUMBER` | Só dígitos com país e DDD (ex.: 5511999999999). Sem ele, os botões de WhatsApp não aparecem. |
| `VITE_PHONE_DISPLAY` | Telefone exibido no site |
| `VITE_EMAIL` | E-mail institucional (opcional) |
| `VITE_PRIVACY_CONTROLLER` | Nome oficial do controlador de dados, confirmado pela organização |
| `VITE_PRIVACY_EMAIL` | Canal para solicitações de privacidade; se vazio, usa `VITE_EMAIL` |
| `VITE_ADDRESS` | Localização da organização (opcional) |
| `VITE_SITE_URL` | URL pública, usada no SEO (canonical) |

Campos vazios simplesmente não aparecem.

## Estrutura

```
src/
  components/   Header, Hero, About, Services, Clinics, ClinicCard, Process,
                Faq, Contact, Footer, PrivacyPolicy, WhatsAppButton, FloatingWhatsApp
  data/
    content.js  textos de serviços, etapas e FAQ
    clinics.js  lista de clínicas (VAZIA de propósito)
    api.js      fetchClinics(): hoje lê o arquivo local; depois, a API Spring Boot
  config.js     leitura do .env e links do WhatsApp
  styles/global.css
```

## Clínicas

`src/data/clinics.js` está vazio: a seção mostra um aviso até que clínicas **reais e verificadas** sejam cadastradas (formato descrito no próprio arquivo). Para integrar com Java/Spring Boot + PostgreSQL, troque o corpo de `fetchClinics()` em `data/api.js` por um `fetch` ao endpoint. O botão "Ver localização" já abre o Google Maps pelo endereço (ou por `mapsUrl`).

## Antes de publicar

- Preencher o `.env` com o número oficial de WhatsApp.
- Definir domínio, número de WhatsApp e dados oficiais do controlador nas variáveis de ambiente da hospedagem.
- **Revisar a política de privacidade** (`PrivacyPolicy.jsx`) com um profissional jurídico e confirmar finalidades, compartilhamentos e prazos de retenção com o controlador.
- Validar os textos informativos com responsável técnico da área da saúde.
- Incluir foto real e autorizada das clínicas quando forem cadastradas.
- Executar `npm ci`, `npm audit` e `npm run build` antes de publicar.
- No Netlify, `netlify.toml` publica `dist/` e `public/_headers` define os cabeçalhos; conferir a resposta HTTP depois do primeiro deploy.
