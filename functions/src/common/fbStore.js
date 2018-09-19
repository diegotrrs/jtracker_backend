import admin from 'firebase-admin';

const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);
const { FieldValue } = admin.firestore;
const firestore = admin.firestore();
firestore.settings({timestampsInSnapshots: true})
const firestoreAuth = admin.auth();

export { firestore, firestoreAuth, FieldValue };
