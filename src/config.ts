interface Config {
    GRAPHQL_URL: string;
}

const config: Config = {
    GRAPHQL_URL: process.env.REACT_APP_GRAPHQL_URL!,
};

export default config;
