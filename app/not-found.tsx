import Link from "next/link";
import { ArrowIcon } from "../components/icons";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <div className="container not-found-inner"><span>404</span><h1>Diese Route führt<br /><em>nicht zum Ziel.</em></h1><p>Die aufgerufene Seite existiert nicht oder wurde verschoben.</p><div><Link className="button" href="/">Zur Startseite <ArrowIcon /></Link><Link className="button button-ghost" href="/leistungen">Leistungen ansehen</Link></div></div>
    </main>
  );
}
