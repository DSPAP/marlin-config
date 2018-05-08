const router = module.exports = require('express').Router();
const store = require('../store');

router.use('/s/editor', require('./editor'));
if (store.mods.upnp)
  router.use('/upnp', require('./upnp'));
if (store.mods.serial)
  router.use('/', require('./serial'));