import FullSite from "./FullSite.jsx";
import LinkHub from "./components/LinkHub.jsx";
import CocainePage from "./components/CocainePage.jsx";
import CrackPage from "./components/CrackPage.jsx";
import CannabisPage from "./components/CannabisPage.jsx";
import AlcoholPage from "./components/AlcoholPage.jsx";
import MedicationPage from "./components/MedicationPage.jsx";

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (path === "/site") return <FullSite />;
  if (path === "/dependencia-de-cocaina") return <CocainePage />;
  if (path === "/dependencia-de-crack") return <CrackPage />;
  if (path === "/dependencia-de-maconha") return <CannabisPage />;
  if (path === "/dependencia-de-alcool") return <AlcoholPage />;
  if (path === "/dependencia-de-medicamentos") return <MedicationPage />;
  return <LinkHub />;
}
