/**
 * Prints current time to the console.
 */
printCurrentTime = function(functionName) {
  var date = new Date();
  console.log(
    "[ " +
      functionName +
      " (" +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ") ]"
  );
};

/**
 * Prints the data coming in the event.
 */
printEventData = function(event) {
  console.log(JSON.stringify(event.data.data()));
};

module.exports = {
  printCurrentTime: printCurrentTime,
  printEventData: printEventData
};
