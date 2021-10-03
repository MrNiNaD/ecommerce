const express = require('express');
const router = express.Router();
const { signUp } = require('../controller/auth')

router.get('/', (req, res) => {
  res.send('Hello World!!!')
});

router.post('/signin', () => {

});

router.post('/signup', signUp);

module.exports = router;