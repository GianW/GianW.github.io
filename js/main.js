var jsonObj = { 'lista':
					[ 'Progress 4GL','JavaScript', 'HTML5', 'NodeJS','PHP','MySQL','MongoDB','ExtJs'],
				'skills':
				 {
					'Progress 4GL':'95',
					'JavaScript':'85',
					'HTML5':'90',   						
					'NodeJS': '65',
					'PHP': '80',
					'MySQL':'85',
					'MongoDB': '75',
					'ExtJs': '70'				
				}
			  };


function selecionaMenu(menu){
	var listaMenus 	 = document.getElementsByTagName("li");
	var tamListaMenu = listaMenus.length;

	for (var i = 0; i < tamListaMenu; i++) {
		listaMenus[i].className = "";
	};

	menu.className = "active";

	mostraAba(menu.id);
}

function mostraAba(aba){
	escondeAbas();

	if (aba == "menu_skills") {
		document.getElementById("habs").style.display = "block";

    	var tamLista = jsonObj.lista.length;
    	var conteudo = "<div class=linhaSkill>";
    	var cont_aux = 0;

    	for (var i = 0; i < tamLista; i++) {    		
    		conteudo += "<div id="+jsonObj.lista[i]+" class='coluna_"+i+"'></div>";

    		if (cont_aux == 3) {
    			conteudo += "</div><div class=linhaSkill>";
    			cont_aux = 0
    		}else{
    			cont_aux++;
    		}

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
	if (aba == "menu_sobre") {
		document.getElementById("sobre").style.display = "block";
	}
	if (aba == "Contato") {
		document.getElementById("menu_contato").style.display = "block";
	};
	if (aba == "Projetos") {
		document.getElementById("menu_projetos").style.display = "block";
	};
}

function escondeAbas(){
	document.getElementById("sobre").style.display 		= "none";
	document.getElementById("habs").style.display 		= "none";
	document.getElementById("contato").style.display 	= "none";
	document.getElementById("projetos").style.display 	= "none";
}

