import * as firestore from '../services/firestore';
import * as api from '../api/_base';
import constants from '../constants';

const { TEST } = constants.COLLECTIONS;


export const getTest = (request, response) => {
  firestore.getCollection(TEST)
  .then( result => api.success(response, result))
  .catch( exception => api.error(response, exception))
}