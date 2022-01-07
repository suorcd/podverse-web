/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require('./next-i18next.config')
const { withSentryConfig } = require('@sentry/nextjs')

const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const envVars = {}
const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

const moduleExports = {
  disableServerWebpackPlugin: isDev,
  disableClientWebpackPlugin: isDev,
  reactStrictMode: true,
  i18n,
  serverRuntimeConfig: {
    API_PATH: process.env.API_PATH,
    API_VERSION: process.env.API_VERSION,
    API_DOMAIN: process.env.API_DOMAIN,
    API_PROTOCOL: process.env.API_PROTOCOL,
    WEB_PROTOCOL: process.env.WEB_PROTOCOL,
    WEB_DOMAIN: process.env.WEB_DOMAIN,
    APP_DOWNLOAD_ON_THE_APP_STORE_URL: process.env.APP_DOWNLOAD_ON_THE_APP_STORE_URL,
    APP_GET_IT_ON_FDROID_URL: process.env.APP_GET_IT_ON_FDROID_URL,
    APP_GET_IT_ON_GOOGLE_PLAY_URL: process.env.APP_GET_IT_ON_GOOGLE_PLAY_URL,
    PAYPAL_ENV: process.env.PAYPAL_ENV,
    PAYPAL_CLIENT_ID_PRODUCTION: process.env.PAYPAL_CLIENT_ID_PRODUCTION,
    PAYPAL_CLIENT_ID_SANDBOX: process.env.PAYPAL_CLIENT_ID_SANDBOX,
    EMAIL_CONTACT: process.env.EMAIL_CONTACT,
    MATOMO_BASE_URL: process.env.MATOMO_BASE_URL,
    MATOMO_ENDPOINT_PATH: process.env.MATOMO_ENDPOINT_PATH,
    MATOMO_SITE_ID: process.env.MATOMO_SITE_ID
  },
  publicRuntimeConfig: {
    API_PATH: process.env.API_PATH,
    API_VERSION: process.env.API_VERSION,
    API_DOMAIN: process.env.PUBLIC_API_DOMAIN,
    API_PROTOCOL: process.env.PUBLIC_API_PROTOCOL,
    WEB_PROTOCOL: process.env.PUBLIC_WEB_PROTOCOL,
    WEB_DOMAIN: process.env.PUBLIC_WEB_DOMAIN,
    APP_DOWNLOAD_ON_THE_APP_STORE_URL: process.env.APP_DOWNLOAD_ON_THE_APP_STORE_URL,
    APP_GET_IT_ON_FDROID_URL: process.env.APP_GET_IT_ON_FDROID_URL,
    APP_GET_IT_ON_GOOGLE_PLAY_URL: process.env.APP_GET_IT_ON_GOOGLE_PLAY_URL,
    PAYPAL_ENV: process.env.PAYPAL_ENV,
    PAYPAL_CLIENT_ID_PRODUCTION: process.env.PAYPAL_CLIENT_ID_PRODUCTION,
    PAYPAL_CLIENT_ID_SANDBOX: process.env.PAYPAL_CLIENT_ID_SANDBOX,
    EMAIL_CONTACT: process.env.EMAIL_CONTACT,
    MATOMO_BASE_URL: process.env.MATOMO_BASE_URL,
    MATOMO_ENDPOINT_PATH: process.env.MATOMO_ENDPOINT_PATH,
    MATOMO_SITE_ID: process.env.MATOMO_SITE_ID
  }
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
