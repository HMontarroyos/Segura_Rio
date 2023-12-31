const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "hmontarroyos",
    projectName: "formInsuranceCompany",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
  });
};
