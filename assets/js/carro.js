// JavaScript Document

function carro(){
	this.cor = kharrin.custom.config.cor;
	this.objeto = $(".carro");		
	this.coluna = 2;
	this.num = this.objeto.offset().top;
	this.rotate = 0;
	this.motion = null;
	this.vidas = 4;
	this.houve_acidente = false;
	this.objeto.find('#carcarca').css('fill', this.cor);
	this.init();
	
}

carro.prototype.init = function(){
	this.acidente();
	this.direcao();
}

carro.prototype.direcao = function(){
	
	var self = this;	

	self.motion = function(event){

		var 
			x = event.accelerationIncludingGravity.x;
	  
	  	if(x>= -3 && x<= 3){
		  var dir = parseInt((-x+3)/2)+1;
		  self.objeto.css('left', dir*25-8.5 +'%');
		  self.coluna = dir;
	  	}
	  
	}

	if(window.DeviceMotionEvent){
	  window.addEventListener("devicemotion", self.motion, false);
	}else{
	  console.log("DeviceMotionEvent is not supported");
	}	

}

carro.prototype.stop_motion = function(){
	var self = this;
	window.removeEventListener("devicemotion", self.motion, false);
	self.motion = null;
}

carro.prototype.acidente = function(){

	var self = this;	
	self.contador = setInterval(function(){
		for(var i in arr.obj){
			if(arr.obj[i]!=null){
				if(
					arr.obj[i].coluna == self.coluna &&
					arr.obj[i].num <= self.num && arr.obj[i].num >= self.num - (self.objeto.width()) &&
					(
						self.px2N(arr.obj[i].objeto.css('left')) - 25 <= self.px2N(self.objeto.css('left')) &&
						self.px2N(arr.obj[i].objeto.css('left')) + arr.obj[i].objeto.width() + 25 >= self.px2N(self.objeto.css('left'))
						||
						self.px2N(arr.obj[i].objeto.css('left')) - 25 <= self.px2N(self.objeto.css('left')) + self.objeto.width() &&
						self.px2N(arr.obj[i].objeto.css('left')) + arr.obj[i].objeto.width() + 25 >= self.px2N(self.objeto.css('left')) + self.objeto.width()
					) 		
				)
				{
					new acidente(self, arr.obj[i].tipo);
					self.stop_motion();
					if(arr.obj[i].tipo != 1) self.perdeu();
					else setTimeout(function(){ self.perdeu(); },3000);					
				}
				
			}
		}
	
	},frequencia);	
	
}

carro.prototype.perdeu = function(){
	var self = this;
	if(self.vidas > 0 && !self.houve_acidente){
		kharrin.exibe_bt_continuar();
		self.vidas = --self.vidas;
		$('.cont-vidas').width(35*self.vidas)
		self.houve_acidente = true;
	}else if(self.vidas == 0){
	  kharrin.game_over();
	  clearInterval(self.contador);
	}

}

carro.prototype.px2N = function(px){
	return Number(px.replace('px',''));
}

