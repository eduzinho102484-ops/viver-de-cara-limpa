import { useEffect } from "react";
import FullSite from "./FullSite.jsx";
import LinkHub from "./components/LinkHub.jsx";
import CocainePage from "./components/CocainePage.jsx";
import CrackPage from "./components/CrackPage.jsx";
import CannabisPage from "./components/CannabisPage.jsx";
import AlcoholPage from "./components/AlcoholPage.jsx";
import MedicationPage from "./components/MedicationPage.jsx";
import { substancePages } from "./data/substances.js";
import { setPageSeo } from "./seo.js";

const defaultSeo = {
  title: "Viver de Cara Limpa | Orientação e acolhimento",
  description: "Informação, acolhimento e orientação para pessoas e familiares que buscam apoio relacionado ao uso de álcool e outras drogas.",
};

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  useEffect(() => {
    const article = Object.values(substancePages).find((item) => item.slug === path);
    if (article) {
      setPageSeo({ title: `${article.name} | Viver de Cara Limpa`, description: article.metaDescription, path });
      return;
    }
    setPageSeo({
      title: path === "/site" ? "Conheça o trabalho | Viver de Cara Limpa" : defaultSeo.title,
      description: path === "/site"
        ? "Conheça o trabalho do Viver de Cara Limpa e encontre informações sobre acolhimento, orientação e possibilidades de apoio."
        : defaultSeo.description,
      path,
    });
  }, [path]);

  if (path === "/site") return <FullSite />;
  if (path === "/dependencia-de-cocaina") return <CocainePage />;
  if (path === "/dependencia-de-crack") return <CrackPage />;
  if (path === "/dependencia-de-maconha") return <CannabisPage />;
  if (path === "/dependencia-de-alcool") return <AlcoholPage />;
  if (path === "/dependencia-de-medicamentos") return <MedicationPage />;
  return <LinkHub />;
}
