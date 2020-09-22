const express = require('express');
const router = express.Router();
const playlistsCtrl = require('../controllers/messages');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post('/', checkAuth, playlistsCtrl.create);
router.delete('/:id', checkAuth, playlistsCtrl.delete);
router.put('/:id', checkAuth, playlistsCtrl.update)

//do we need any more functionality here?

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;