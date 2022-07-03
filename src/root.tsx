import { type LinksFunction, type MetaFunction } from "@remix-run/cloudflare";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import tailwindStyles from "./styles/tailwind.generated.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Patryk Szydłowski",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [{ href: tailwindStyles, rel: "stylesheet" }];

export default () => (
  <html lang="en">
    <head>
      <Meta />
      <Links />
    </head>
    <body>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);
