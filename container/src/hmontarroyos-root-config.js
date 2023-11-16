import { registerApplication, start } from "single-spa";
import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('https://run.mocky.io/v3/39566f8f-1da0-47b4-952d-45b0a055188d');
    const data = response.data;

    data.applications.forEach(app => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact ? (location) => location.pathname === app.activeWhen : [app.activeWhen],
      });
    });
  } catch (error) {
    console.error('Error getting data:', error);
  } finally {
    start({ urlRerouteOnly: true });
  }
}

fetchData();






