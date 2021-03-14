[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)

![integrate](https://github.com/pets-oss/pets-front/workflows/integrate/badge.svg)

# pets-front

Pets Information System Front-end

Live site is available at https://app.petbook.lt/.


## Setup

Make sure you have [Node JS](https://nodejs.org/en/download/) (> 10v) installed.  

The project codebase is optimized for using Visual Studio Code.

Clone the repository to your local disk. Run `git clone https://github.com/pets-oss/pets-front.git` in the terminal.

Install project package dependencies. Run `npm install` in the terminal.

Make sure to set up local environment variables to run the project (see next section).

To start development version with hot reload, run `npm start` in the terminal. 


## Environment variables

App configuration values are stored in the `.env` file. If it is needed to overwrite values locally, create `.env.local` file and set custom values there. Only variables with `REACT_APP_` prefix will be included.


## GraphQL

GraphQL types used by Typescript should not be defined manually but generated from the schema. To re-generate GraphQL types run `yarn codegen` command. Types are stored in the `src/graphql/types.ts` file.

The latest API features exposed in the [development GraphQL Playground](https://petbook-back-dev.herokuapp.com/graphql).

---
Started by Kayak WeCanCode Academy 2021 @ Kaunas
