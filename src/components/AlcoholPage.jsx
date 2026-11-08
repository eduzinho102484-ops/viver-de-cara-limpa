import SubstanceArticlePage from "./SubstanceArticlePage.jsx";
import { substancePages } from "../data/substances.js";

export default function AlcoholPage() {
  return <SubstanceArticlePage article={substancePages.alcohol} />;
}
