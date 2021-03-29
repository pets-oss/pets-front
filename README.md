[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)

![integrate](https://github.com/pets-oss/pets-front/workflows/integrate/badge.svg)

# pets-front

Pets Information System Front-end

Live site is available at https://app.petbook.lt/.

## Setup

Before starting the setup choose what actions you will do with the code changes. If you will keep it as a local copy - make a **repository clone**. If you will contribute to the project - make a **repository fork** and read the [Contribution guideline](CONTRIBUTING.md).

The project codebase is optimized for using Visual Studio Code which can be [downloaded](https://code.visualstudio.com/) and used with the most of popular OS. Install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions as these are mandatory for project codebase consistency.

Get your local copy of the repository by cloning or forking.

If not yet installed, get [Node JS](https://nodejs.org/en/download/) (> 10v) and [npm](https://www.npmjs.com/get-npm). Run `node -v` in your terminal to check the actual Node version. If you need to be able using various Node versions for your projects, consider installing and using [Node version manager](https://www.npmjs.com/package/n).

Install project package dependencies. Run `npm install` in the terminal. Running the same command is recommended after each repository update as more dependencies may be added in the project development.

Make sure to set up local environment variables to run the project (see next section).

To start development version with hot reload, run `npm start` in the terminal.

## Environment variables

App configuration values are stored in the `.env` file. For your local build, create `.env.local` file from `.env.sample` and set custom values there. Only variables with `REACT_APP_` prefix will be included.

### Auth0 variables and configs

To have setup for local build register with Auth0 and follow [Auth0 React integration guide](https://auth0.com/docs/quickstart/spa/react/01-login). Set `REACT_APP_AUTH0_DOMAIN`, `REACT_APP_AUTH0_CLIENT_ID` variables according to yours created Auth0 App.

Follow other steps of [this guide](https://auth0.com/docs/quickstart/spa/react/01-login#configure-callback-urls) (in your Auth0 "Application" section - set **Allowed Callback URLs**, **Allowed Callback URLs**, **Allowed Web Origins**, **Allowed Origins (CORS)**).

The value of the `REACT_APP_AUTH0_AUTH_AUDIENCE` parameter needs to match an existing API service identifier configured in the "APIs" section of your Dashboard.

Continue setting params in your Auth0 "Application" section - set **Application type** to "Regular Web Application", **Token Endpoint Authentication Method** to "None".

After `env` variables are defined and Auth0 service itself is configured, you're good to go.

## GraphQL

GraphQL types used by Typescript should not be defined manually but generated from the schema. To re-generate GraphQL types run `npm run codegen` command.

Types are stored in the `src/graphql/types.ts` file.

The latest API features exposed in the [development GraphQL Playground](https://petbook-back-dev.herokuapp.com/graphql).

---

Started by Kayak WeCanCode Academy 2021 @ Kaunas
