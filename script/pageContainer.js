﻿var page1, page2, page3, page4, page5;

$(document).ready(function () {                                                   

	//menu principal
	page1 ='<div id="div1"><img id="playbutton" src="img/play.png"/></div><div id="personnage1"></div><div id="personnage2"></div>';
	
	//page de tutoriel
	page5 = '<div id="grosseDivSaMere"><div id="boiteNoire"></div><div id="divDuHaut"><h1> BIENVENUE DANS LE JEU TILES WAR ! </h1></div><div id="divDuBas"><div id="divDeGauche"><ul><li id="button1" class="button"> Regles generales </li><br></br><li id="button2" class="button"> Comment se deplacer? </li><br></br><li id="button3" class="button"> Comment attaquer? </li></ul></div><div id="divDeDroite"><img id="jouerBouton" src="img/play.png"/></div></div></div><div id="regleContient"></div></div>'

	//page de selection des persos
	page2 ='<div id="haut"><div id="gauche1"><div id="persoOne"></div><div id="persoTwo"></div><div id="persoThree"></div></div><div id="centre1"></div><div id="droite1"><div id="persoFour"></div><div id="persoFive"></div><div id="persoSix"></div></div></div><div id="bas"><table id="tableauSelection"><tr class="ligne"><td id="case1" class="boite"></td><td id="case2" class="boite"></td><td id="case3" class="boite"></td><td id="case4" class="boite"></td><td id="case5" class="boite"></td></tr><tr class="ligne"><td id="case6" class="boite"></td><td id="case7" class="boite"></td><td id="case8" class="boite"></td><td id="case9" class="boite"></td><td id="case10"class="boite"> </td></tr></table><img id="boutonDeLancement" src="img/play.png"/></div>';
	
	//page de selection des maps
	page3 ='<div id="backgroundGeneralBoite"><div id="topBoite"></div><div id="middleBoite"><div id="leftBoite" class="midBoite"></div><div id="leftMidBoite" class="midBoite"></div><div id="midBoite" class="midBoite"></div><div id="rightMidBoite" class="midBoite"></div><div id="rightBoite" class="midBoite"></div></div><div id="botBoite"><img id="boutonJouer" src="img/play.png"/></div></div><div id="blackBox"></div></div>';

	//page de jeu 
	page4 ='<div id="bandContainer"></div><div id="leftBox" class="sideBox"><div id="cardBox1" class="cardBox"><div class="identityTop"><div id="identityImg1" class="identityImg"></div><h1 class="identityName" id="identityName1">Default</h1></div><div class="identityBot"><div class="bar"><img class="icon" src="img/lifeIcon.png"/><div id="lifeBar1" class="lifeBar"></div></div><div class="bar"><img class="icon" src="img/staminaIcon.png"/><div id="staminaBar1" class="staminaBar"></div></div></div></div><div id="cardBox2" class="cardBox"><div class="identityTop"><div id="identityImg2" class="identityImg"></div><h1 class="identityName" id="identityName2">Default</h1></div><div class="identityBot"><div class="bar"><img class="icon" src="img/lifeIcon.png"><div id="lifeBar2" class="lifeBar"></div></div><div class="bar"><img class="icon" src="img/staminaIcon.png"><div id="staminaBar2" class="staminaBar"></div></div></div></div><div id="cardBox3" class="cardBox"><div class="identityTop"><div id="identityImg3" class="identityImg"></div><h1 class="identityName" id="identityName3">Default</h1></div><div class="identityBot"><div class="bar"><img class="icon" src="img/lifeIcon.png"><div id="lifeBar3" class="lifeBar"></div></div><div class="bar"><img class="icon" src="img/staminaIcon.png"><div id="staminaBar3" class="staminaBar"></div></div></div></div></div><div id="middleBox"><div id="titleBox"></div><table id="tableauMap"></table><div id="footerBox"><input type="button" id="turnButton" value="Passer le tour!"/></div></div><div id="rightBox" class="sideBox"><div id="cardBox4" class="cardBox"><div class="identityTop"><div id="identityImg4" class="identityImg"></div><h1 class="identityName" id="identityName4">Default</h1></div><div class="identityBot"><div class="bar"><img class="icon" src="img/lifeIcon.png"><div id="lifeBar4" class="lifeBar"></div></div><div class="bar"><img class="icon" src="img/staminaIcon.png"><div id="staminaBar4" class="staminaBar"></div></div></div></div><div id="cardBox5" class="cardBox"><div class="identityTop"><div id="identityImg5" class="identityImg"></div><h1 class="identityName" id="identityName5">Default</h1></div><div class="identityBot"><div class="bar"><img class="icon" src="img/lifeIcon.png"><div id="lifeBar5" class="lifeBar"></div></div><div class="bar"><img class="icon" src="img/staminaIcon.png"><div id="staminaBar5" class="staminaBar"></div></div></div></div><div id="cardBox6" class="cardBox"><div class="identityTop"><div id="identityImg6" class="identityImg"></div><h1 class="identityName" id="identityName6">Default</h1></div><div class="identityBot"><div class="bar"><img class="icon" src="img/lifeIcon.png"><div id="lifeBar6" class="lifeBar"></div></div><div class="bar"><img class="icon" src="img/staminaIcon.png"><div id="staminaBar6" class="staminaBar"></div></div></div></div></div>'; 
		
		
	$("#container").html(page1);
	index();
});

//<div class="identityTop"><div id="identityImg1" class="identityImg"></div><h1 class="identityName" id="identityName1">Default</h1></div><div class="identityBot"><div class="bar"><img class="icon" src="img/lifeIcon.png"><div id="lifeBar1" class="lifeBar"></div></div><div class="bar"><img class="icon" src="img/staminaIcon.png"><div id="staminaBar1" class="staminaBar"></div></div></div>	