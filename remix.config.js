/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: "src",
  devServerBroadcastDelay: 500,
  ignoredRouteFiles: ["**/.*"],
  server: "src/entry.cloudflare.js",
  serverBuildTarget: "cloudflare-pages",
};
