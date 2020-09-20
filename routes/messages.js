const express = require('express');
const router = express.Router();
const messagesCtrl = require('../controllers/messages');

/*---------- Public Routes ----------*/
router.get('/', checkAuth, messagesCtrl.index)

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post('/', checkAuth, messagesCtrl.create);
router.delete('/:id', checkAuth, messagesCtrl.delete);
router.put('/:id', checkAuth, messagesCtrl.update)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;