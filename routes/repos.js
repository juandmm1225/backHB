var express = require('express');
var router = express.Router();
const repoController = require("../controllers/repos.controller")

/* GET repos listing. */
router.get('/get', async  function (req, res, next) {
    await repoController.listRepo(req, res);
});

router.post('/create', async function(req, res, next) {
    await repoController.createRepo(req, res);
});

router.post('/update', async function(req, res, next) {
    await repoController.editRepo(req, res);
});

router.post('/delete', async function(req, res, next) {
    await repoController.deleteRepo(req, res);
});

router.get('/auth', async function (req, res, next) {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  res.send('should login');
});

module.exports = router;