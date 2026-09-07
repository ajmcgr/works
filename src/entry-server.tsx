import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppContent } from "./App";
import { getSeoForPath, indexableRoutes, structuredDataForPage } from "./seo";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>,
  );
}

export { getSeoForPath, indexableRoutes, structuredDataForPage };
