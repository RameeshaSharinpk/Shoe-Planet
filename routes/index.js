var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let products = [
    {
      brand: "ADIDAS",
      name: "Crihase Cricket Shoes For Men  (White)",
      price: 2599,
      image: "https://rukminim1.flixcart.com/image/800/960/xif0q/shoe/q/m/t/10-ga2880-10-adidas-ftwwht-orarus-shanav-original-imagg7cdzujuqmay-bb.jpeg?q=50"
    },
    {
      brand: "NIKE",
      name: "Downshifter 11 Running Shoes For Men  (Blue)",
      price: 2789,
      image: "https://rukminim1.flixcart.com/image/495/594/xif0q/shoe/8/l/n/8-cw3411-402nike-9-nike-midnight-navy-white-dark-obsidian-original-imag4yyfhmqf6hyg-bb.jpeg?q=50"
    },
    {
      brand: "asian",
      name: "wndr-13 sports shoes for men",
      price: 1599,
      image: "https://rukminim1.flixcart.com/image/800/960/xif0q/shoe/k/b/a/wonder-1313-7-asian-grey-orange-original-imaffbmzjc5hmagy-bb.jpeg?q=50"
    },
    {
      brand: "Deals4you ",
      name: "Sneakers For Women  (White)",
      price: 999,
      image: "https://rukminim1.flixcart.com/image/800/960/xif0q/shoe/8/r/t/5-779-womn-t-rock-multicolor-original-imag7zs5yh3crtzz-bb.jpeg?q=50"
    }

  ]
  res.render('index', { products});
});

module.exports = router;
