import { firestore } from '../common/fbStore';

const firestoreDB = firestore;

/**
 * Returns a reference to a document in a subcollection.
 * @param {String} collection The name of the parent collection.
 * @param {String} subCollection The name of the subcollection.
 * @param {String} documentId The id of the parent document.
 * @param {String} subDocumentId The id of the document whose reference will be return.
 */
export const getSubcollectionDocumentReference = (collection, subCollection, documentId, subDocumentId) => {
  console.log(collection, subCollection, documentId, subDocumentId);
  return  firestoreDB
  .collection(collection)
  .doc(documentId)
  .collection(subCollection)
  .doc(subDocumentId);
} 

/**
 * Updates a document in Firestore.
 * @param {Object} ref The reference of the document in Firestore
 * @param {*} data The JSON object containing the data to update. It follows
 * the format {field: value, field2: 'value'}
 */
export const updateDocument = (ref, data) => {
  return ref.update(data);
}

/*
 * Returns a subcollection for the specified document
 * @param {String} collectionName The name of the collection where the root document belongs to.
 * @param {String} documentId The id of the document
 * @param {String} subCollectionName The name of the subcollection
 */
export const getSubCollection = (collectionName, documentId, subCollectionName) =>
  firestoreDB
    .collection(collectionName)
    .doc(documentId)
    .collection(subCollectionName)
    .get()
    .then((snapshot) => {
      const documents = [];
      snapshot.forEach((doc) => {
        documents.push(doc.data());
      });
      return documents;
    });

/**
 * Returns a collection of documents
 * @param {String} collectionName The name of the collection.
 */
export const getCollection = collectionName =>
  firestoreDB
    .collection(collectionName)
    .get()
    .then((snapshot) => {
      const documents = [];
      snapshot.forEach((doc) => {
        documents.push(doc.data());
      });
      return documents;
    });

