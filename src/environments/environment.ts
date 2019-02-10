// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDOebQg8FEib1Htdkk36-_a2GNEEkyzAJQ",
    authDomain: "hackamity-692c2.firebaseapp.com",
    databaseURL: "https://hackamity-692c2.firebaseio.com",
    projectId: "hackamity-692c2",
    storageBucket: "hackamity-692c2.appspot.com",
    messagingSenderId: "350822236150"
  },
  dialogflow:'1a5784ab0feb447e9bcf7a9abb4f1505',
  mapbox: {
    accessToken: 'pk.eyJ1IjoidmFzdWRldjEzIiwiYSI6ImNqbmU5ZjM4bjB4dWIzcm8wMTdrd2U5emUifQ.u7TFbd6KyXTxs7N-pkL-eA',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
