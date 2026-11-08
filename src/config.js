// Dados oficiais vêm do arquivo .env (veja .env.example).
// Campos vazios não aparecem no site.
const env = import.meta.env;

const digits = (value = "") => String(value).replace(/\D/g, "");

export const config = {
  name: "Viver de Cara Limpa",
  whatsappNumber: digits(5511973585085),
  phoneDisplay: (env.VITE_PHONE_DISPLAY || "").trim(),
  email: (env.VITE_EMAIL || "").trim(),
  privacyController: (env.VITE_PRIVACY_CONTROLLER || "").trim(),
  privacyEmail: (env.VITE_PRIVACY_EMAIL || env.VITE_EMAIL || "").trim(),
  address: (env.VITE_ADDRESS || "").trim(),
  // Padrão do domínio de produção; VITE_SITE_URL permite trocar pelo endereço confirmado.
  siteUrl: (env.VITE_SITE_URL || "https://viverdecaralimpa.com.br").trim().replace(/\/$/, ""),
};

// Link universal: funciona no celular (abre o app) e no computador (WhatsApp Web/Desktop).
export function whatsappUrl(message = "Olá! Gostaria de receber orientação.") {
  if (!config.whatsappNumber) return null;
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function phoneHref() {
  const d = digits(config.phoneDisplay);
  return d ? `tel:+${d.startsWith("55") ? d : "55" + d}` : null;
}
