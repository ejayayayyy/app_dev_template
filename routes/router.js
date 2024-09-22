const express = require('express');
const route = express.Router();
const modules = require('../controller/Web_Controller');

route.get('/', modules.index);
route.get('/search', modules.search)
route.get('/playlist', modules.playlist)
route.get('/favorites', modules.favorites)
route.get('/profile', modules.profile)
// route.get('/settings', modules.settings)

module.exports = route;