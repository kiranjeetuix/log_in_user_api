// Import with `const Sentry = require("@sentry/node");` if you are using CJS
import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
  dsn: 'https://17cdf9d5d60f1180fbe0b01068b4c2fa@o4507474632507392.ingest.de.sentry.io/4507480887722064',
  integrations: [nodeProfilingIntegration()],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions

  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});
