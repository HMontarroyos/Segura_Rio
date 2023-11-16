import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@hmontarroyos/insuranceCompany",
  app: () => System.import("@hmontarroyos/insuranceCompany"),
  activeWhen: (location) =>
    location.pathname === "/",
});

registerApplication({
  name: "@hmontarroyos/coverageInsuranceCompany",
  app: () => System.import("@hmontarroyos/coverageInsuranceCompany"),
  activeWhen: (location) =>
    location.pathname === "/",
});


start({
  urlRerouteOnly: true,
});
