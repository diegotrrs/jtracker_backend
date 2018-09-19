var main = require("./main");

index();

/**
 * This is the entry point of the program. This function will call the function specified as an argument. For example,
 *
 * --action=migrateUsers then the function migrateUsers  (in the migrator.js file) will be called with the rest of the arguments specified.
 */
function index() {
  let args = require("minimist")(process.argv.slice(2));
  //Get the function to call from the parameters. This way we avoid having a big switch case statement.
  let functionToCall = args.action;

  try {
    if (args.action !== undefined) {
      main[functionToCall](args);
    } else {
      console.log("You must specify an action.");
    }
  } catch (e) {
    console.log(e);
    if (e instanceof TypeError) {
      console.log(
        "ATTENTION: An error ocurred. Check the action matches a function in the facadeExecutor file. "
      );
    }
  }
}
