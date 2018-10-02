// JavaScript Document
function objeto(coluna,tipo){
	this.num = -500;
	this.coluna = coluna;
	this.tipo = tipo;
	this.rotate = 1;
	this.contador;
	this.objeto;
	this.batido = false;
	this.num_random = Math.floor((Math.random() * 7));	
	
	var existe_null = false;
	/*for(var i in arr.obj){
			if(arr.obj[i]==null){
				arr.idx = i;
				existe_null = true;
			}
	}*/
	//this.idx = existe_null ? arr.idx : ++arr.idx;
	this.idx = ++arr.idx;

	this.init();
	
	arr.obj[this.idx] = this;
		
}

objeto.prototype.init = function(){
	this.aceleracao();
	this.criar();
}

objeto.prototype.criar = function(){
	var self = this;
	self.objeto = $('<div class="objeto absolute coluna_' + self.coluna + ' tipo_' + self.tipo + '"></div>');
	if(self.tipo == 3) self.objeto.css('background-image',"url(http://kharrin.richardds.com.br/assets/img/adversario.php?cor=" +  self.num_random + ")");
	$('#sec-objeto .cont-objeto').append(self.objeto);
	//self.objeto.append(self.objeto.css('left'));
}

objeto.prototype.aceleracao = function(){
	var self = this;	
	self.contador = setInterval(function(){
		var frames_obj = self.tipo == 3 && !self.batido ? frames/3 : frames;
		self.objeto.css({'top':(self.num+=frames_obj) +'px' });
		
		if(self.num > $(window).height()){
			
			clearInterval(self.contador);
			self.objeto.remove();
			arr.obj[self.idx] = null;								
		}
		
		/*for(var i in arr.obj){
			if(arr.obj[i]!=null){
				if(
					i != self.idx &&
					self.tipo == 3 &&
					arr.obj[i].objeto.css('left')  <= self.objeto.width() &&
					arr.obj[i].objeto.css('left')  >= self.objeto.width() + self.objeto.css('left') &&
					arr.obj[i].num <= self.num && arr.obj[i].num >= self.num - (self.objeto.width()/2)
				) new acidente(self, arr.obj[i].tipo);
				
			}
		}*/
	
	},frequencia);
	
	
	
}

objeto.prototype.pause = function(){
	var self = this;
	clearInterval(self.contador);
}

function escalonador(){
	this.num = 0;
	this.randomNum = 1;
	this.init();
	this.contador;
}

escalonador.prototype.init = function(){	
	this.distribuir();	
	for(var i in arr.obj){
		if(arr.obj[i] != null) arr.obj[i].aceleracao();
	}
}

escalonador.prototype.distribuir = function(){
	var self = this;
	self.contador = setInterval(function(){
		
		var 
			col = self.random(1,4),
			tip = self.random(1,4)

		self.num++;
		if( self.num >= 1 ){
			if(tip != 3 && /*$('.coluna_' + col).length == 0 &&*/ $('.tipo_3').length == 0 ) new objeto(col,tip);
			else if(tip == 3) new objeto(col,tip);
			self.num=0;
		}
		
	},1500);
}

escalonador.prototype.random = function(min,max){
	return Math.floor(Math.random() * (max - min)) + min;
}

escalonador.prototype.pause = function(){
	var self = this;
	clearInterval(self.contador);
	for(var i in arr.obj){
		if(arr.obj[i] != null) arr.obj[i].pause();
	}
}

escalonador.prototype.stop = function(){
	var self = this;
	self.pause();
	for(var i in arr.obj){
		if(arr.obj[i] != null) arr.obj[i].objeto.remove();
	}
	arr.idx=0;
	arr.obj=[];
}

