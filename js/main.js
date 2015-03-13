var jsonObj = { 'lista':
					[ 'Progress','JavaScript', 'CSS3', 'NodeJS'],
				'skills':
				 {
					'Progress':'95',
					'JavaScript':'85',
					'CSS3':'75',   						
					'NodeJS': '65'					
				}
			  };


function selecionaMenu(menu){
	var listaMenus 	 = document.getElementsByTagName("li");
	var tamListaMenu = listaMenus.length;

	for (var i = 0; i < tamListaMenu; i++) {
		listaMenus[i].className = "";
	};

	menu.className = "active";

	mostraAba(menu.innerHTML);
}

function mostraAba(aba){
	escondeAbas();

	if (aba == "Habs") {
		document.getElementById("habs").style.display = "block";

    	var tamLista = jsonObj.lista.length;
    	var conteudo = "<div class=linhaSkill>";
    	var cont_aux = 0;

    	for (var i = 0; i < tamLista; i++) {    		
    		conteudo += "<div id="+jsonObj.lista[i]+" class='coluna_"+i+"'></div>";

    		if (cont_aux == 3) {
    			conteudo += "</div><div class=linhaSkill>";
    			cont_aux = 0
    		};

    		cont_aux++;
    	};

    	document.getElementById("habs").innerHTML = conteudo + "</div>";
   		
   		for (var i = 0; i < tamLista; i++) { 

   			eval("rp"+i+"=radialProgress(document.getElementById('"+jsonObj.lista[i]+"'))"
   					+ ".label('"+jsonObj.lista[i]+"')"
   					+ ".onClick('')"
	                + ".diameter(120)"
	                + ".value("+jsonObj.skills[jsonObj.lista[i]]+")"
	                + ".render();"
	             );
			
   		};

	};
	if (aba == "Sobre") {
		document.getElementById("sobre").style.display = "block";
	}
	if (aba == "Contato") {
		document.getElementById("contato").style.display = "block";
	};
}

function escondeAbas(){
	document.getElementById("sobre").style.display 		= "none";
	document.getElementById("habs").style.display 		= "none";
	document.getElementById("contato").style.display 	= "none";
}

