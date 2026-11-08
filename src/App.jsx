import FullSite from "./FullSite.jsx";
import LinkHub from "./components/LinkHub.jsx";

export default function App() {
  return window.location.pathname.replace(/\/$/, "") === "/site" ? <FullSite /> : <LinkHub />;
}
