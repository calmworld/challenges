/*
Write a function called "greetCustomer".

Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant. Please refer to the customerData object.
The greeting should be different, depending on the name on their reservation.

Notes:
Your function should not alter the customerData object to update the number of visits.
Do not hardcode to the exact sample data. This is a BAD IDEA:
if (firstName === 'Joe') {
  // do something
}
*/

var customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
};

function greetCustomer(firstName) {
  // check to see if customrt has been in restaurant before
  if (customerData[firstName] === undefined) {
    return "Welcome! Is this your first time?";
  }
  //create a customerVisits object, assign to customerData[firstName]
  var customerVisits = customerData[firstName];
  //check how many times a customer visited
  if (customerVisits.visits === 1) {
    return (
      "Welcome back, " + firstName + "! We're glad you liked us the first time!"
    );
  } else {
    return "Welcome back, " + firstName + "! So glad to see you again!";
  }
}

