import SubstanceArticlePage from "./SubstanceArticlePage.jsx";
import { substancePages } from "../data/substances.js";

export default function CocainePage() {
  return <SubstanceArticlePage article={substancePages.cocaine} />;
}
