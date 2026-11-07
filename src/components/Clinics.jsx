import { useEffect, useState } from "react";
import ClinicCard from "./ClinicCard.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { fetchClinics } from "../data/api.js";
import Reveal from "./Reveal.jsx";

export default function Clinics() {
  const [list, setList] = useState(null);

  useEffect(() => {
    let active = true;
    fetchClinics().then((data) => active && setList(data));
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="clinicas" className="section">
      <div className="container">
        <Reveal className="section-intro">
          <p className="eyebrow">Conheça as clínicas</p>
          <h2>Instituições parceiras</h2>
        </Reveal>

        {list && list.length > 0 ? (
          <Reveal className="card-grid clinic-grid stagger-children">
            {list.map((c) => (
              <ClinicCard key={c.id ?? c.name} clinic={c} />
            ))}
          </Reveal>
        ) : (
          list && (
            <Reveal className="empty-state">
              <p>
                As clínicas parceiras, com informações verificadas, serão apresentadas aqui. Enquanto isso, nossa
                equipe pode orientar você sobre as alternativas disponíveis.
              </p>
              <WhatsAppButton>Falar com a equipe</WhatsAppButton>
            </Reveal>
          )
        )}
      </div>
    </section>
  );
}
