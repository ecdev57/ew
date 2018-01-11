//liste des fonction scorm
//inisalise scorm
function onLoadPage(){
	doInitialize();
}
//ferme scorm
function onUnLoadPage() {
	doTerminate();
}
function calculSaveSucess(score="0.86") {
	// recuperer le nom de l'apprentie
	var name= doGetValue("cmi.learner_name");
	// definir le score minimal de réussite
	//var score= "0.86";
	//je regarde si le score envoyer correspond a var score
	var result doSetValue("cmi.score.scaled", score);
	
	
	//je recherche le signe
	var bookmark= doGetValue("cmi.location");
	// obtien le temps passe sur l'exercice
	var tempsInPasse = doGetValue("cmi.session_time");
	// save les donnée dans sco
	doSetValue("cmi.suspend_data", "save this data");
	if (result) {
		calcRes=doSetValue("cmi.success_statuts", "failed");
		return "Félicitation"+name+"vous reussi l'exercice en passant"+tempsInPasse;
	} else {
		calcRes=doSetValue("cmi.success_statuts", "passed");
		return name+"vous n'avez pas reussi l'exercice";
	}
	 return "Bonjour"+name+"Vous avez passé"+tempsInPasse+"votre "

}