const getMessage = name => {
  let message;

  if (name === null || name.trim().length === 0) {
    message = "Please provide a name!";
  } else {
    message = `Hello ${name}`;
  }

  return message;
};

module.exports = getMessage;
