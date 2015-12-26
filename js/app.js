window.React = require('react');
var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI');
var FluxCartApp = require('./components/FluxCartApp.react');

//Load product data
ProductData.init();

// Load data from local storage
CartAPI.getProductData();

// Render FluxCartApp Controller View
React.render(
		<FluxCartApp />,
		document.getElementById('container')
	)
