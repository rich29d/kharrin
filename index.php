<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
<meta name="mobile-web-app-capable" content="yes">
<title>Kharrin</title>

<link rel="stylesheet" href="assets/css/geral.css?ver=<?= rand() ?>" />
<link rel="stylesheet" href="assets/css/style.css?ver=<?= rand() ?>" />
<link rel="stylesheet" href="assets/css/controles.css?ver=<?= rand() ?>" />
<link rel="stylesheet" href="assets/css/animate.css?ver=<?= rand() ?>" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
</head>



<body id="box">

<article class="absolute">

    <section id="sec-logo" class="absolute zIndex14">
        <div class="logo"></div>
        <div class="btn-iniciar-custom" onclick="kharrin.new_custom();">Iniciar</div>        
    </section>

    <section id="sec-custom" class="absolute zIndex14">
        <div class="custom-carro">
            
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
            viewBox="0 0 8663 11197"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             enable-background="new 0 0 800 800">
             <defs>
              <style type="text/css">
               <![CDATA[
                .str0 {stroke:#F9F9F9;stroke-width:262.5}
                .fil3 {fill:none}
                .fil0 {fill:black}
                .fil2 {fill:#7DDDFF}
                .fil1 {fill:red}
               ]]>
              </style>
             </defs>
             <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"/>
              <g id="_496780016">
               <path class="fil0" d="M2231 3873c0,174 -141,315 -315,315l-315 0c-174,0 -315,-141 -315,-315l0 -1155c0,-174 141,-315 315,-315l315 0c174,0 315,141 315,315l0 1155z"/>
               <path class="fil0" d="M2179 9228c0,174 -141,315 -315,315l-315 0c-174,0 -315,-141 -315,-315l0 -1155c0,-174 141,-315 315,-315l315 0c174,0 315,141 315,315l0 1155z"/>
               <path class="fil0" d="M7455 9228c0,174 -141,315 -315,315l-315 0c-174,0 -315,-141 -315,-315l0 -1155c0,-174 141,-315 315,-315l315 0c174,0 315,141 315,315l0 1155z"/>
               <path class="fil0" d="M7455 3873c0,174 -141,315 -315,315l-315 0c-174,0 -315,-141 -315,-315l0 -1155c0,-174 141,-315 315,-315l315 0c174,0 315,141 315,315l0 1155z"/>
               <path class="fil1 carcaca animate" d="M6956 9858l0 -735 0 -1665c-593,-1348 0,-2955 0,-2955l0 -2189c-137,-141 -298,-267 -470,-380 -374,-1141 -1202,-1934 -2164,-1934 -966,0 -1798,800 -2169,1949 -163,110 -315,231 -447,365l0 2189c0,0 593,1607 0,2955l0 1665 0 735 -1706 0 0 1339 8663 0 0 -1339 -1707 0z"/>
               <path class="fil2" d="M6177 3479c-12,-514 -833,-929 -1844,-929 -1012,0 -1833,415 -1844,929l-22 0 0 971 3728 0 0 -971 -18 0z"/>
               <line class="fil3 str0" x1="3624" y1="10473" x2="3632" y2= "11197" />
               <line class="fil3 str0" x1="4858" y1="10473" x2="4866" y2= "11197" />
              </g>
             </g>
            </svg>

        </div>

        <div class="cont-paleta">
            <div class="paleta">
                <div class="cor-custom animate" style="background-color: #191970"></div>
                <div class="cor-custom animate" style="background-color: #00FF7F"></div>
                <div class="cor-custom animate" style="background-color: #CD5C5C"></div>
                <div class="cor-custom animate ativa" style="background-color: #FF0000"></div>
                <div class="cor-custom animate" style="background-color: #A020F0"></div>
                <div class="cor-custom animate" style="background-color: #836FFF"></div>
                <div class="cor-custom animate" style="background-color: #00F5FF"></div>
                <div class="cor-custom animate" style="background-color: #FF7F00"></div>
            </div>
        </div>

        <div class="btn-iniciar-custom" onclick="kharrin.corrida();">Pronto</div> 

    </section>

    <section id="sec-vidas" class="absolute zIndex12">
        <div class="cont-vidas animate">
            <div class="mesa-vidas">
                <div class="vida ativa animate"></div>
                <div class="vida ativa animate"></div>
                <div class="vida ativa animate"></div>
                <div class="vida ativa animate"></div>
            </div>
        </div>
    </section>

    <section id="sec-ctrl" class="absolute zIndex12">
        <div class="cont-ctrl status-play">
            <div class="ctrl play animate"  onclick="kharrin.play()"></div>
            <div class="ctrl pause animate" onclick="kharrin.pause()"></div>
            <div class="ctrl reset animate"  onclick="kharrin.reset()"></div>
            <div class="ctrl continuar animate"  onclick="kharrin.continuar()">CONTINUAR</div>
        </div>
    </section>

	<section id="sec-km" class="absolute zIndex6">
    	<div class="cont-km">
        	<div class="km">            	
            	<div class="num-km ">0</div>
                <div class="num-medida ">km</div>              
            </div>
        </div>
    </section>

	<section id="sec-pista" class="absolute zIndex2">
    	<div class="cont-pista absolute zIndex2">
        	<div class="pista absolute zIndex2"></div>
        </div>
    </section>
    
    <section id="sec-objeto" class="absolute zIndex4">
    	<div class="cont-objeto absolute zIndex2">
        </div>
    </section>
    
    <section id="sec-carro">
    	<div class="cont-carro">
        	<div class="carro animate zIndex10">
            	
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve">
				
    				<path d="M264,309c0,6.627-5.373,12-12,12h-12c-6.627,0-12-5.373-12-12v-44c0-6.627,5.373-12,12-12h12c6.627,0,12,5.373,12,12V309z"
    					/>
    				<path d="M262,513c0,6.627-5.373,12-12,12h-12c-6.627,0-12-5.373-12-12v-44c0-6.627,5.373-12,12-12h12c6.627,0,12,5.373,12,12V513z"
    					/>
    				<path d="M463,513c0,6.627-5.373,12-12,12h-12c-6.627,0-12-5.373-12-12v-44c0-6.627,5.373-12,12-12h12c6.627,0,12,5.373,12,12V513z"
    					/>
    				<path d="M463,309c0,6.627-5.373,12-12,12h-12c-6.627,0-12-5.373-12-12v-44c0-6.627,5.373-12,12-12h12c6.627,0,12,5.373,12,12V309z"
    					/>
    				<path class="animate carcaca" fill="#F00" d="M444,537v-28v-63.433C421.405,394.216,444,333,444,333v-83.378c-5.245-5.37-11.352-10.19-17.909-14.505
    					c-14.252-43.449-45.805-73.657-82.442-73.657c-36.806,0-68.48,30.486-82.637,74.257c-6.215,4.162-12.007,8.782-17.011,13.905V333
    					c0,0,22.595,61.216,0,112.567V509v28h-65v51h330v-51H444z"/>
    				<path fill="#7DDDFF" d="M414.304,294c-0.428-19.59-31.707-35.405-70.25-35.405c-38.542,0-69.822,15.815-70.25,35.405H273v37h142v-37
    					H414.304z"/>
    				<line fill="none" stroke="#F9F9F9" stroke-width="10" stroke-miterlimit="10" x1="317.054" y1="560.433" x2="317.37" y2="588"/>
    				<line fill="none" stroke="#F9F9F9" stroke-width="10" stroke-miterlimit="10" x1="364.054" y1="560.433" x2="364.37" y2="588"/>
				</svg>

                
            </div>
        </div>
    </section>

    <section id="sec-game-over" class="absolute zIndex14">
        <div class="tit-game-over">GAME OVER</div>
        <div class="distancia-percorrida">distância: <span>0</span>km</div>
        <div class="campo_nome">
            <span>Insira seu nome</span>
            <input type="text" maxlength="3" name="nome">
        </div>
        <div class="btn-iniciar-custom" onclick="kharrin.enviar_nome();">Enviar</div>        
    </section>

    <section id="sec-ranking" class="absolute zIndex14">
        <div class="tit-ranking">RANKING</div>
        <div class="tabela-ranking">Nenhum elemento encontrado</div>
        <a class="btn-iniciar-custom" style="margin-top: 15px" href="http://kharrin.richardds.com.br/">jogar de novo</div>
    </section>

</article>
<script>    
	var 
		altWin = $(window).height()/5,
		frames = altWin/30,
		frequencia = 10;
	var arr = {idx:0, obj:[]};
</script>

<script src="assets/js/pista.js?ver=<?= rand() ?>"></script>
<script src="assets/js/custom.js?ver=<?= rand() ?>"></script>
<script src="assets/js/quilometragem.js?ver=<?= rand() ?>"></script>
<script src="assets/js/acidente.js?ver=<?= rand() ?>"></script>
<script src="assets/js/carro.js?ver=<?= rand() ?>"></script>
<script src="assets/js/objeto.js?ver=<?= rand() ?>"></script>
<script src="assets/js/script.js?ver=<?= rand() ?>"></script>

</body>
</html>