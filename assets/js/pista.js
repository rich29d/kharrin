// JavaScript Document

function pista(){
	this.num = 0;
	this.num_km = 0;
	this.contador;
	this.km = new quilometragem(0);
}

pista.prototype.aceleracao = function(){
	var self = this;
	this.pause();
	self.contador = setInterval(function(){
		var altWin = $(window).height()/5;
		$('.pista').css({'background-position':'0px ' + (self.num+=frames) +'px' });		
		self.km.marcacao(self.num_km+=frames);
	},frequencia);
}

pista.prototype.background = function(){
	var self = this;
	this.pause();	
	self.contador = setInterval(function(){
		var altWin = $(window).height()/5;
		$('.pista').css({'background-position':'0px ' + (self.num+=frames) +'px' });
	},frequencia);
}

pista.prototype.play = function(){
	this.aceleracao();
}

pista.prototype.pause = function(){
	var self = this;
	clearInterval(self.contador);
}

pista.prototype.stop = function(){
	var self = this;
	self.pause();
	self.num = 0;
	self.num_km = 0;
	self.km = new quilometragem(0);
}