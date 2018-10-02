// JavaScript Document

var kharrin = {    
	pista: new pista()
}
kharrin.pista.background();

kharrin.new_custom = function(){
	kharrin.full_screen();
	$('#sec-logo').fadeOut();
	$('#sec-custom').fadeIn();
	kharrin.custom = new custom();
}

kharrin.corrida = function(){
	$('article').removeClass('status-iniciar');
	$('#sec-custom').fadeOut();
	setTimeout(function(){
		kharrin.carro = new carro(),
		kharrin.escalonador = new escalonador();
		kharrin.pista.play();
	},1000);
}

kharrin.pause = function(){
	kharrin.pista.pause();
	kharrin.escalonador.pause();
	$('.cont-ctrl')
		.removeClass('status-continuar')
		.removeClass('status-play')
		.addClass('status-pause');
}

kharrin.reset = function(){
	kharrin.pista.stop();
	kharrin.escalonador.stop();
	this.play();
}

kharrin.continuar = function(){
	kharrin.escalonador.stop();
	this.play();
}

kharrin.play = function(){
	kharrin.pista.play();
	kharrin.escalonador.init();
	kharrin.carro.houve_acidente = false;
	kharrin.carro.objeto.removeClass('batido');
	kharrin.carro.direcao();
	$('.cont-ctrl')
		.removeClass('status-continuar')
		.removeClass('status-pause')
		.addClass('status-play');
}

kharrin.exibe_bt_continuar = function(){
	kharrin.pause();
	$('.cont-ctrl')
		.removeClass('status-pause')
		.removeClass('status-play')
		.addClass('status-continuar');
}


kharrin.full_screen = function(){
			    // check if user allows full screen of elements. This can be enabled or disabled in browser config. By default its enabled.
			    //its also used to check if browser supports full screen api.
			    if("fullscreenEnabled" in document || "webkitFullscreenEnabled" in document || "mozFullScreenEnabled" in document || "msFullscreenEnabled" in document) 
			    {
			    	if(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
			    	{
			    		console.log("User allows fullscreen");
			        
				        var element = document.getElementById("box");
				        //requestFullscreen is used to display an element in full screen mode.
				        if("requestFullscreen" in element) 
				        {
				            element.requestFullscreen();
				        } 
				        else if ("webkitRequestFullscreen" in element) 
				        {
				            element.webkitRequestFullscreen();
				        } 
				        else if ("mozRequestFullScreen" in element) 
				        {
				            element.mozRequestFullScreen();
				        } 
				        else if ("msRequestFullscreen" in element) 
				        {
				            element.msRequestFullscreen();
				        }

			    	}
			    }
			    else
			    {
			        console.log("User doesn't allow full screen");
			    }
}

kharrin.game_over = function(){
	kharrin.pause();
	$('.distancia-percorrida span').text((kharrin.pista.km.km/1000).toFixed(2));
	$('#sec-custom').fadeOut();
	$('#sec-game-over').fadeIn();
	$('.campo_nome input').focus();
}

kharrin.enviar_nome = function(){
	var data = {
		nome: $('.campo_nome input').val(),
		dist: (kharrin.pista.km.km/1000).toFixed(2),
		cor : kharrin.custom.config.cor
	}

	$.post('enviar_nome.php', data)
	.done(function(resp){
		var respJSON = JSON.parse(resp);
		$('#sec-game-over').fadeOut();
		$('#sec-ranking').fadeIn();
		kharrin.ranking(respJSON);		
	});
}

kharrin.ranking = function(dataJSON){
	
	var ranking_html = "";

	for(var i in dataJSON.ranking){
		ranking_html +="\
			<div class='linha-ranking' id='rkg_" + dataJSON.ranking[i].id + "'>\
				<div class='pos-ranking'>" + (Number(i)+1) + "º</div>\
				<div class='nome-ranking' style='color:" + dataJSON.ranking[i].cor + "'>" + dataJSON.ranking[i].nome + "</div>\
				<div class='km-ranking'>" + String(dataJSON.ranking[i].dist).replace('.',',') + "km</div>\
			</div>\
		";	
	}

	$('.tabela-ranking').html(ranking_html);

	setTimeout(function(){
		kharrin.foque_me(dataJSON.id)
	},500);

}

kharrin.foque_me = function(id){
	console.log(id);
	var el 	 = $('#rkg_' + id);
	el.addClass('pisca-linha');
	var posX = el.offset().top;
	$('.tabela-ranking')
			.animate({
				"scrollTop":posX - ($(window).height()/2)
			},{
		      queue: false,
		      duration: 3000
		    });

}
