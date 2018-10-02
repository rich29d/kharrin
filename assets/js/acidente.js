// JavaScript Document

function acidente(obj, tipo){
	this.obj = obj;
	this.tipo = tipo;
	if(this.tipo == 1) this.giro();
	else this.batida();
}

acidente.prototype.giro = function(){
	var self = this;
	self.obj.objeto.addClass('giro');
	setTimeout(function(){ 
		self.obj.objeto.removeClass('giro');
		//self.obj.direcao();
	},4000);
}

acidente.prototype.batida = function(){
	this.obj.batido = true;
	this.obj.objeto.addClass('batido');			
}