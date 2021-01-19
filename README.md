[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)

![integrate](https://github.com/pets-oss/pets-front/workflows/integrate/badge.svg)

# pets-front

Pets Information System Front-end

Live site is available at https://pets-oss.github.io/pets-front/.

## Environment variables

App configuration values are stored in the `.env` file. If it is needed to overwrite values locally, create `.env.local` file and set custom values there. Only variables with `REACT_APP_` prefix will be included.

## GraphQL

GraphQL types used by Typescript should not be defined manually but generated from the schema. To re-generate GraphQL types run `yarn codegen` command. Types are stored in the `src/graphql/types.ts` file.

---
Started by Kayak WeCanCode Academy 2021 @ Kaunas
