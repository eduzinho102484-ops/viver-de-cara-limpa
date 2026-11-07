import WhatsAppButton from "./WhatsAppButton.jsx";

// Preparado para integração futura com Google Maps: se a clínica tiver `mapsUrl`
// (ou coordenadas), basta usar aqui. Por ora, abre a busca do Maps pelo endereço.
function locationUrl(clinic) {
  if (clinic.mapsUrl && /^https:\/\//i.test(clinic.mapsUrl)) return clinic.mapsUrl;
  const query = [clinic.name, clinic.address, clinic.city, clinic.state].filter(Boolean).join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function ClinicCard({ clinic }) {
  return (
    <article className="card clinic-card">
      {clinic.photoUrl && (
        <img src={clinic.photoUrl} alt={`Estrutura da ${clinic.name}`} loading="lazy" className="clinic-photo" />
      )}
      <div className="clinic-body">
        <h3>{clinic.name}</h3>
        <p className="muted">
          {[clinic.city, clinic.state].filter(Boolean).join(" - ")}
        </p>
        {clinic.address && <p>{clinic.address}</p>}
        {clinic.phone && (
          <p>
            <a href={`tel:${clinic.phone.replace(/\D/g, "")}`}>{clinic.phone}</a>
          </p>
        )}
        {clinic.services?.length > 0 && (
          <ul className="tag-list">
            {clinic.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}
        <div className="btn-row">
          <a className="btn btn-secondary" href={locationUrl(clinic)} target="_blank" rel="noopener noreferrer">
            Ver localização
          </a>
          <WhatsAppButton
            variant="primary"
            message={`Olá! Gostaria de solicitar informações sobre a clínica ${clinic.name}.`}
          >
            Solicitar informações
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
