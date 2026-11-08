import SubstanceArticlePage from "./SubstanceArticlePage.jsx";
import { substancePages } from "../data/substances.js";

export default function CrackPage() {
  return <SubstanceArticlePage article={substancePages.crack} />;
}
