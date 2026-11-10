import { siteConfig } from '../data/config.js'

// Gera o link do WhatsApp a partir do número configurado em data/config.js.
// Sem número configurado, devolve "#contato" (nunca inventa um número).
export function getWhatsAppUrl(message = siteConfig.whatsappMessage) {
  const number = String(siteConfig.whatsappNumber || '').replace(/\D/g, '')

  if (!number) {
    if (import.meta.env.DEV) {
      console.warn('[CarlosDev] Configure whatsappNumber em src/data/config.js')
    }
    return '#contato'
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function hasWhatsApp() {
  return String(siteConfig.whatsappNumber || '').replace(/\D/g, '').length > 0
}
