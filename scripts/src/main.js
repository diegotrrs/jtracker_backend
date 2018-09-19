import { firestoreDB } from "./config/firebase";
import constants from "./constants";

const {COLLECTIONS} = constants.CONSTANTS;

main();

export function main (args) {
  firestoreDB.collection(COLLECTIONS.TEST).add({
    name: "Tokyo",
    country: "Japan"
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
}
