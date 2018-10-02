// JavaScript Document

function quilometragem(km){
	this.km = km;
	this.init();
}

quilometragem.prototype.init = function(){
	this.marcacao(this.km);	
}

quilometragem.prototype.marcacao = function(km){
	
	this.km = km;
	var txt_km = (km/1000).toFixed(2).replace('.',',');	
	$('.km .num-km').text(txt_km);
	
}

