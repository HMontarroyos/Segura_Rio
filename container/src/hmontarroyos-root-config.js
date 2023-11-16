import { registerApplication, start } from "single-spa";
import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('https://run.mocky.io/v3/f9d31078-7dc0-4cd9-b962-8b0b3f274fcd');
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






