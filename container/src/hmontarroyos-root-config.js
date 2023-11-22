import { registerApplication, start } from "single-spa";
import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/fbfe162e-ad1d-4edf-821f-021f6246a5ab"
    );
    const data = response.data;

    const sortedApplications = data.applications.sort(
      (a, b) => a.order - b.order
    );

    const importPromises = sortedApplications.map((app) =>
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact
          ? (location) => location.pathname === app.activeWhen
          : [app.activeWhen],
      })
    );

    await Promise.all(importPromises);

    setTimeout(() => {
      start({ urlRerouteOnly: true });
    }, 1000);
  } catch (error) {
    console.error("Error getting data:", error);
  }
}

fetchData();
