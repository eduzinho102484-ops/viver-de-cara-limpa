import SubstanceArticlePage from "./SubstanceArticlePage.jsx";
import { substancePages } from "../data/substances.js";

export default function CannabisPage() {
  return <SubstanceArticlePage article={substancePages.cannabis} />;
}
