import Icon from "./Icon.jsx";
import { whatsappUrl } from "../config.js";

export default function WhatsAppButton({
  children = "Fale conosco pelo WhatsApp",
  message,
  variant = "primary",
  className = "",
}) {
  const url = whatsappUrl(message);
  if (!url) return null; // sem número oficial configurado, o botão não aparece

  return (
    <a
      className={`btn btn-${variant} ${className}`.trim()}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="whatsapp" size={20} fill="currentColor" stroke="none" />
      {children}
    </a>
  );
}
