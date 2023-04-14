import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey:
    process.env.NODE_ENV === 'production' ? '' : process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

if (process.env.NODE_ENV === 'production') {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(
      ''
    ),
    isTokenAutoRefreshEnabled: true,
  });
}

const db = getFirestore(app);

export { db };
