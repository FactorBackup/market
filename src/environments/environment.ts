// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  hosting: 'http://localhost:8100',
  firebaseConfig: {
  apiKey: "AIzaSyBL3P0v9WMhRZH-OEO0R6o2Ijk0gx-xwYQ",
  googleClientId: '807755525390-6rq3nfl2o3emt2d0kp3se8aurh11u988.apps.googleusercontent.com',
 
  authDomain: "factor-market.firebaseapp.com",
  databaseURL: "https://factor-market.firebaseio.com",
  projectId: "factor-market",
  storageBucket: "factor-market.appspot.com",
  messagingSenderId: "1027414247965",
  appId: "1:1027414247965:web:a4396e5990784ffdc314f4"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
