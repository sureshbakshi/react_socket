class AppConfig {
    ENV: string;
    apiDomain: string;
    appLink: string;
    constructor() {
        this.ENV = process.env.NODE_ENV;
        console.log(`${this.ENV} base url===> ${process.env.API_DOMAIN}`); // Don't remove this console
        this.apiDomain = process.env.API_DOMAIN;
        this.appLink = process.env.APP_LINk;
    }
}

export const app_config = new AppConfig();
