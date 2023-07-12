const generatePassword = require('generate-password');

// Generate a random password
const password = generatePassword.generate();
console.log('Generated Password:', password);
