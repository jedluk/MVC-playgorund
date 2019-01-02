const router = require('express').Router();
const path = require('path');
const ROOT_DIR = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    // res.sendFile(path.join(ROOT_DIR, 'views', 'shop.html'));
    const { products } = adminData;
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;