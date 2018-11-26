if (typeof firebase === 'undefined')
  throw new Error(
    'hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js'
  );
firebase.initializeApp({
  apiKey: 'AIzaSyDX76cjDTdhQ5Hvv3J5wDwz7NHQTDGihL4',
  authDomain: 'chris-esplin.firebaseapp.com',
  databaseURL: 'https://chris-esplin.firebaseio.com',
  projectId: 'chris-esplin',
  storageBucket: 'chris-esplin.appspot.com',
  messagingSenderId: '853505957881',
});
