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
  title: "Ajuda para Dependência Química | Viver de Cara Limpa",
  description: "Orientação acolhedora para quem enfrenta problemas com álcool e outras drogas. Conheça possibilidades de cuidado e apoio para familiares.",
};

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  useEffect(() => {
    const article = Object.values(substancePages).find((item) => item.slug === path);
    if (article) {
      setPageSeo({ title: article.seoTitle, description: article.metaDescription, path });
      return;
    }
    setPageSeo({
      title: path === "/site" ? "Orientação sobre Tratamento e Clínicas | Viver de Cara Limpa" : defaultSeo.title,
      description: path === "/site"
        ? "Entenda como buscar tratamento para dependência química, conhecer possibilidades de acolhimento e encontrar apoio para você ou sua família."
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
