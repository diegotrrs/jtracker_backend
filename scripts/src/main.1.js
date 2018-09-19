import { firestoreDB } from "./config/firebase";
import constants from "./constants";
import algoliasearch from 'algoliasearch';

import config from "./config/algolia";
import currencies from './data/currencies';

const algoliaSDK = algoliasearch(config.AlgoliaAppID, config.AlgoliaAPIKey);
const territoriesIndex = algoliaSDK.initIndex(constants.ALGOLIA_INDEXES.TERRITORIES);

export function indexTerritories (args) {
  firestoreDB.collection(constants.COLLECTIONS.TERRITORIES)
    .get()
    .then((querySnapshot)  => {
      const territories = [];
      querySnapshot.forEach(doc => territories.push(doc.data()));
      territoriesIndex.addObjects(territories, (error, content) => {
        console.log('All Territories imported');
      });
    });
}

function insertCurrenciesAux (currenciesKeys, currenciesObj) {
  if (currenciesKeys.length === 0) {
    return true;
  } else {
    const id = currenciesKeys.pop();
    const info = currenciesObj[id];
    firestoreDB
      .collection(constants.COLLECTIONS.CURRENCIES)
      .doc(id)
      .set({
        admin: {
          id,
        },
        info,
      })
      .then(() => {
        return insertCurrenciesAux(currenciesKeys, currenciesObj);
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
}

export function insertCurrencies(args) {
  const currenciesKeys = Object.keys(currencies);
  insertCurrenciesAux(currenciesKeys, currencies);
}
