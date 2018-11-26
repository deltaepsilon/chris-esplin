import React from 'react';

export default ({ firebaseEnv }) => {
  return (
    <>
      {/* <script src="https://www.gstatic.com/firebasejs/5.5.9/firebase.js" /> */}
      <script src="https://www.gstatic.com/firebasejs/5.5.9/firebase-app.js" />
      <script src="https://www.gstatic.com/firebasejs/5.5.9/firebase-auth.js" />
      <script src="https://www.gstatic.com/firebasejs/5.5.9/firebase-messaging.js" />
      <script src="https://www.gstatic.com/firebasejs/5.5.9/firebase-firestore.js" />
      <script src="https://www.gstatic.com/firebasejs/5.5.9/firebase-database.js" />
      <script src="https://www.gstatic.com/firebasejs/5.5.9/firebase-storage.js" />
      <script src="/__/firebase/init.js" onError={handleError} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof firebase == 'undefined') {
              throw new Error('Firebase SDK not detected.');
            } else {
              firebase.apps.length == 0 && firebase.initializeApp(${JSON.stringify(firebaseEnv)})
              firebase.firestore().settings({ timestampsInSnapshots: true })
            }
          `,
        }}
      />
    </>
  );
};

function handleError(error) {
  console.error('error', error);
}
