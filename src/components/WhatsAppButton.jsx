import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl, hasWhatsApp } from '../utils/whatsapp.js'

export default function WhatsAppButton({ children, variant = 'primary', message, className = '' }) {
  const href = getWhatsAppUrl(message)
  const external = hasWhatsApp()

  return (
    <a
      className={`btn btn--${variant} ${className}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {children}
    </a>
  )
}
