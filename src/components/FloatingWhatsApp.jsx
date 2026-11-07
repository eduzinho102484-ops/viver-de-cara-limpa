import Icon from "./Icon.jsx";
import { whatsappUrl } from "../config.js";

export default function FloatingWhatsApp() {
  const url = whatsappUrl();
  if (!url) return null;

  return (
    <a
      className="floating-whatsapp"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Icon name="whatsapp" size={30} fill="currentColor" stroke="none" />
    </a>
  );
}
