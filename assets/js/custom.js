function custom(){
	this.arr_btn_cor = [];
	this.config = {
		cor : null
	}
	this.init();
}

custom.prototype.init = function(){
	this.paleta();
}

custom.prototype.paleta = function(){
	var self = this;
	$('.cor-custom').each(function(){
		self.arr_btn_cor.push(new btn_cor_custom($(this), self));
	});
}

function btn_cor_custom(btn_cor, escopo){

	this.objeto = $('.custom-carro, .carro');
	this.escopo = escopo;
	this.btn_cor = btn_cor;
	this.carcaca = this.objeto.find('.carcaca');
	this.cor = this.btn_cor.css('background-color');
	this.init();
}

btn_cor_custom.prototype.init = function(){
	this.btn_cor_custom();
}

btn_cor_custom.prototype.btn_cor_custom = function(){
	var self = this;
	self.btn_cor.on('click', function(){
		self.carcaca.css('fill', self.cor);
		self.escopo.config.cor = self.cor;
		$('.cor-custom').removeClass('ativa');
		self.btn_cor.addClass('ativa');
	});
	
}

