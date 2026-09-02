import Link from "next/link";
import type { Service } from "../lib/content";
import { ArrowIcon, Icon } from "./icons";

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="icon-tile"><Icon name={service.icon} /></span>
        {typeof index === "number" ? <span className="card-index">{String(index + 1).padStart(2, "0")}</span> : null}
      </div>
      <p className="card-eyebrow">{service.eyebrow}</p>
      <h3>{service.shortTitle}</h3>
      <p>{service.summary}</p>
      <Link className="text-link" href={`/leistungen/${service.slug}`} aria-label={`${service.shortTitle} ansehen`}>
        Leistungsumfang <ArrowIcon />
      </Link>
    </article>
  );
}
