var jsonObj = { 'lista':
					[ 'Progress','JavaScript', 'HTML5', 'NodeJS','PHP','MySQL','MongoDB','ExtJS'],
				'skills':
				 {
					'Progress':'95',
					'JavaScript':'85',
					'HTML5':'90',   						
					'NodeJS': '65',
					'PHP': '80',
					'MySQL':'85',
					'MongoDB': '75',
					'ExtJS': '70'				
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
	if (aba == "menu_contato") {
		document.getElementById("contato").style.display = "block";
		requisitar('contato.html', 'contato', function(){					
					setTimeout(
						function(){
							document.getElementById('ico_twitter').className 	= "fa fa-twitter fa-3x animated bounceInDown"
							document.getElementById('label_twitter').className 	= "animated bounceInUp"
						}, 200
					);
					setTimeout(
						function(){
							document.getElementById('ico_linkedin').className 	= "fa fa-linkedin-square fa-3x animated bounceInDown"
							document.getElementById('label_linkedin').className = "animated bounceInUp"
						}, 400
					);
					setTimeout(
						function(){
							document.getElementById('ico_git').className 		= "fa fa-github fa-3x animated bounceInDown"
							document.getElementById('label_github').className 	= "animated bounceInUp"
						}, 600
					);
					setTimeout(
						function(){
							document.getElementById('ico_face').className 		= "fa fa-facebook-official fa-3x animated bounceInDown"
							document.getElementById('label_face').className 	= "animated bounceInUp"
						}, 800
					);
				});
			
	};
	if (aba == "menu_projetos") {
		document.getElementById("projetos").style.display = "block";
		requisitar('projetos.html','projetos');
	};
	if (aba == "menu_posts") {
		document.getElementById("posts").style.display = "block";
		requisitar('game.html','posts', function(){inicializar();});
	};
}

function escondeAbas(){
	document.getElementById("sobre").style.display 		= "none";
	document.getElementById("habs").style.display 		= "none";
	document.getElementById("contato").style.display 	= "none";
	document.getElementById("projetos").style.display 	= "none";
	document.getElementById("posts").style.display 		= "none";
	document.getElementById("posts").innerHTML	 		= "";
}

function iniciaAjax() { 
	var objetoAjax = false; 
	if (window.XMLHttpRequest) { 
		objetoAjax = new XMLHttpRequest(); 
	}
	else if (window.ActiveXObject) { 
		try {  
			objetoAjax = new ActiveXObject("Msxml2.XMLHTTP"); 
		}
		catch(e) { 
			try { 
				objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");  
			}
			catch(ex) {  
				objetoAjax = false; 
            } 
		} 
	} 
	return objetoAjax; 
} 


function requisitar (arquivo, onde, callback) { 
	var requisicaoAjax = iniciaAjax();  
	if(requisicaoAjax) { 
		requisicaoAjax.onreadystatechange = function () {  
			mostraResposta(requisicaoAjax, onde, callback); 			
		}; 
		requisicaoAjax.open("GET", arquivo, true); 
		requisicaoAjax.send(null); 		
	} 	
} 

function mostraResposta(requisicaoAjax, onde, callback) { 
	if(requisicaoAjax.readyState == 4) { 
		if(requisicaoAjax.status == 200 || requisicaoAjax.status == 304) { 
			var insere_aqui = document.getElementById(onde); 
			insere_aqui.innerHTML = requisicaoAjax.responseText; 
			if (typeof(callback) == "function") {
				callback();
			}; 
		}else { 
			alert("Problema na comunicação com o servidor"); 
		} 
	}	  
}

