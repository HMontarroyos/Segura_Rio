import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@hmontarroyos/insuranceCompany",
  app: () => System.import("@hmontarroyos/insuranceCompany"),
  activeWhen: (location) =>
    location.pathname === "/",
});

registerApplication({
  name: "@hmontarroyos/coverage",
  app: () => System.import("@hmontarroyos/coverage"),
  activeWhen: (location) =>
    location.pathname === "/",
});


start({
  urlRerouteOnly: true,
});
