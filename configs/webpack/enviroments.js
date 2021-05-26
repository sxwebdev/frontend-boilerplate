/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const dotEnvironmentPath = path.resolve(__dirname, "../../.env");

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "development";
}

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  throw new Error(
    "The NODE_ENV environment variable is required but was not specified."
  );
}

const dotenvFiles = [
  `${dotEnvironmentPath}.${NODE_ENV}.local`,
  NODE_ENV !== "test" && `${dotEnvironmentPath}.local`,
  `${dotEnvironmentPath}.${NODE_ENV}`,
  dotEnvironmentPath,
].filter(Boolean);

for (const dotenvFile of dotenvFiles) {
  if (fs.existsSync(dotenvFile)) {
    require("dotenv-expand")(
      require("dotenv").config({
        path: dotenvFile,
      })
    );
  }
}

const enviromentRegexp = /^front_/i;

function getEnviroments() {
  return (
    Object.keys(process.env)
      .filter((key) => enviromentRegexp.test(key))
      // eslint-disable-next-line unicorn/no-array-reduce
      .reduce(
        (environment, key) => {
          environment[key] = process.env[key];
          return environment;
        },
        {
          NODE_ENV: process.env.NODE_ENV || "development",
          ENV_CI: process.env.ENV || "dev",
        }
      )
  );
}

module.exports = getEnviroments;
