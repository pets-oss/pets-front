interface Config {
    GRAPHQL_URL: string;
    AUTH0_DOMAIN: string;
    AUTH0_CLIENT_ID: string;
}

const config: Config = {
    GRAPHQL_URL: process.env.REACT_APP_GRAPHQL_URL!,
    AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN!,
    AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID!,
};

export default config;
