import { collection } from 'firebase/firestore';

import { db } from 'firebaseApi';

const productsQuery = collection(db, 'products');
const contactUsQuery = collection(db, 'contact-us');

export { productsQuery, contactUsQuery };
