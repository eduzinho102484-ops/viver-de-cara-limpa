import SubstanceArticlePage from "./SubstanceArticlePage.jsx";
import { substancePages } from "../data/substances.js";

export default function MedicationPage() {
  return <SubstanceArticlePage article={substancePages.medication} />;
}
