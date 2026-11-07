export function Logo({ light = false }) {
  return (
    <a href="#inicio" className={`logo ${light ? "logo-light" : ""}`} aria-label="Viver de Cara Limpa — início">
      <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill={light ? "#e8efe9" : "#1f3d33"} />
        <path
          d="M14 46c10-2 14-10 18-22 4 12 8 20 18 22"
          fill="none"
          stroke={light ? "#1f3d33" : "#e8efe9"}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="17" r="5" fill="#d9c9a8" />
      </svg>
      <span>Viver de Cara Limpa</span>
    </a>
  );
}

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#ajuda", label: "Como ajudamos" },
  { href: "#clinicas", label: "Clínicas" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];
