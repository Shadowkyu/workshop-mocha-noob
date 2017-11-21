var expect = require('chai').expect;

var getPrices = require("../src/shop-tools").getPrices;

describe("getPrices" , function(){
	var products = getPrices();
	

		it ("Nous créons une fonction pour obtenir les prix des 6 produits", function(){
			expect(products).to.eql({
				banane: 1, 
				potato: 2, 
				tomate: 3, 
				concombre: 4, 
				salade: 5,
				pomme: 6
			})
		})		
});

