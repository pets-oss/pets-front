interface Config {
    GRAPHQL_URL: string;
    AUTH0_DOMAIN: string;
    AUTH0_CLIENT_ID: string;
    AUTH0_AUDIENCE_URL: string;
    PUBLIC_URL: string;
}

const config: Config = {
    GRAPHQL_URL: process.env.REACT_APP_GRAPHQL_URL!,
    AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN!,
    AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID!,
    AUTH0_AUDIENCE_URL: process.env.REACT_APP_AUTH0_AUTH_AUDIENCE!,
    PUBLIC_URL: process.env.PUBLIC_URL!,
};

export default config;
