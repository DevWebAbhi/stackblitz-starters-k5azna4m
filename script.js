const jwt = require('jsonwebtoken');


const SECRET_KEY = 'hgchgv-jblonjnolbnboun';


const encrypt = (payload) => {
  try {
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
    return token;
  } catch (error) {
    console.error('Error encrypting payload:', error);
    throw error;
  }
};


const decrypt = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    console.error('Error decrypting token:', error);
    throw error;
  }
};
const token = encrypt({test:"test"});
console.log(token);
const decrypted = decrypt(token)
console.log(decrypted)

module.exports = {
  encrypt,
  decrypt
};
