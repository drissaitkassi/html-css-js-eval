
//------- verfier si les 3 numero de tel sont identique -------- 

function handlePhoneVerification(){

    var teldom=document.getElementById('teldom');
    var telpor=document.getElementById('telpor');
    var telpro=document.getElementById('telpro');
    if(teldom.value == telpor.value && teldom.value == telpro.value){
        alert('les numero sont identiques ')
    }   
}

//------- mettre Dijon dans la valeur du champ ville  si le code postale = 21000 -------- 

function handleCityValue(){

    var postalCode=document.getElementById('codepos');
    var ville=document.getElementById('ville');
    if(postalCode.value == 21000){
        ville.value = 'Dijon'
    }
}

//------- creation formulaire entreprise en clickant sur le button radio Cadre  -------- 

function handleCardeButtons(){
    var activityFieleds=document.getElementById('pro-activity');
    activityFieleds.innerHTML = " <label>Entreprise : </label><input type='text'  name='mail' id='cadre-input'/><br></br>"

}
//------- creation formulaire entite administrative  en clickant sur le button radio fonctionnaire  -------- 

function handleFonctionButtons(){
    var activityFieleds=document.getElementById('pro-activity');
    activityFieleds.innerHTML = " <label>Entite Administrative  : </label><input value='null' type='text' name='fonctionaire-input' id='administration'/><br></br>"

}

//------- creation formulaire ecole / etudiant  en clickant sur le button radio etudtiant   -------- 

function handleEtudiantButtons(){
    var activityFieleds=document.getElementById('pro-activity');
    activityFieleds.innerHTML = " <label>Ecole / Universit√©  : </label><input type='text' value='null' name='mail' id='ecole-input'/><br></br>"

}

//------- creation formulaire patron en clickant sur le button radio patron  -------- 

function handlePatronButtons(){

    var activityFieleds=document.getElementById('pro-activity');
    activityFieleds.innerHTML = "  <label for='patron'>Les Valeur :</label>"
    +" <select id='patron-input' name='patron' value='null'>"
    +"<option value='TPE / TPI'>TPE / TPI</option>"
    +"<option value='PME /PMI'>PME /PMI</option>"
    +"<option value='Grand Group'>Grand Group</option>"
    +"</select>"
}


//------- afficher info saisie en clickant sur le button verifier   -------- 


function afficherInfosSaisies() {

    // -------recuperer les element a afficher ------

    var nom = document.getElementById("nom");			
    var prenom = document.getElementById("prenom");			
    var dateNaissance = document.getElementById("date-naissance");			
    var teldom = document.getElementById("teldom");			
    var telpor = document.getElementById("telpor");			
    var telpro = document.getElementById("telpro");			
    var adrpos = document.getElementById("adrpos");			
    var codepos = document.getElementById("codepos");			
    var ville = document.getElementById("ville");			
    var idMail = document.getElementById("idMail");	
    var cadre = document.getElementById("cadre-input");
    var administration = document.getElementById("administration");	
    var ecole = document.getElementById("ecole-input");			
    var patron = document.getElementById("patron-input");

    //-------recuperer la div ou en va afficher les element ---------

    var blocDivSynthese = document.getElementById("divSynthese");

    //--------- verfier le quel des champs : cadre,administration,ecole,patron n'pas null pour l'afficher dans la synthese------

    if(cadre !== null){
        var synthese = "<p>Synth√®se de ce que vous avez saisi : \n" 
        + "<br/> <strong>Nom  :</strong>"+nom.value + "\n"
        + "<br/> <strong>Prenom :</strong>"+prenom.value + "\n"
        + "<br/> <strong>Date Naissance : </strong>"+dateNaissance.value +"\n"
        + "<br/><strong> Tel domicile : </strong>"+teldom.value+ "\n"
        + "<br/> <strong>Tel Portable : </strong>"+telpor.value +"\n"
        + "<br/> <strong>Tel Professionelle : </strong>"+telpro.value +"\n"
        + "<br/> <strong>Adress Postal : </strong>"+adrpos.value +"\n"
        + "<br/> <strong>Code Postale : </strong>"+codepos.value +"\n"
        + "<br/> <strong>Ville : </strong>"+ville.value +"\n"
        + "<br/> <strong>Email  : </strong>"+idMail.value +"\n"
        + "<br/> <strong>Cadre Dans La Societe  : </strong>"+cadre.value +"\n"
        + "</p>" ;

    }else if(administration !== null){
        var synthese = "<p>Synth√®se de ce que vous avez saisi : \n" 
        + "<br/> <strong>Nom  :</strong>"+nom.value + "\n"
        + "<br/> <strong>Prenom :</strong>"+prenom.value + "\n"
        + "<br/> <strong>Date Naissance : </strong>"+dateNaissance.value +"\n"
        + "<br/><strong> Tel domicile : </strong>"+teldom.value+ "\n"
        + "<br/> <strong>Tel Portable : </strong>"+telpor.value +"\n"
        + "<br/> <strong>Tel Professionelle : </strong>"+telpro.value +"\n"
        + "<br/> <strong>Adress Postal : </strong>"+adrpos.value +"\n"
        + "<br/> <strong>Code Postale : </strong>"+codepos.value +"\n"
        + "<br/> <strong>Ville : </strong>"+ville.value +"\n"
        + "<br/> <strong>Email  : </strong>"+idMail.value +"\n"
        + "<br/> <strong>Fonctionaire aux Services  : </strong>"+administration.value +"\n"
       
        + "</p>" ;

    }else if (ecole !== null){
        var synthese = "<p>Synth√®se de ce que vous avez saisi : \n" 
        + "<br/> <strong>Nom  :</strong>"+nom.value + "\n"
        + "<br/> <strong>Prenom :</strong>"+prenom.value + "\n"
        + "<br/> <strong>Date Naissance : </strong>"+dateNaissance.value +"\n"
        + "<br/><strong> Tel domicile : </strong>"+teldom.value+ "\n"
        + "<br/> <strong>Tel Portable : </strong>"+telpor.value +"\n"
        + "<br/> <strong>Tel Professionelle : </strong>"+telpro.value +"\n"
        + "<br/> <strong>Adress Postal : </strong>"+adrpos.value +"\n"
        + "<br/> <strong>Code Postale : </strong>"+codepos.value +"\n"
        + "<br/> <strong>Ville : </strong>"+ville.value +"\n"
        + "<br/> <strong>Email  : </strong>"+idMail.value +"\n"
        + "<br/> <strong>Etudiant a  : </strong>"+ecole.value +"\n"
        + "</p>" ;

    } else if(patron!==null){

        var synthese = "<p>Synth√®se de ce que vous avez saisi : \n" 
        + "<br/> <strong>Nom  :</strong>"+nom.value + "\n"
        + "<br/> <strong>Prenom :</strong>"+prenom.value + "\n"
        + "<br/> <strong>Date Naissance : </strong>"+dateNaissance.value +"\n"
        + "<br/><strong> Tel domicile : </strong>"+teldom.value+ "\n"
        + "<br/> <strong>Tel Portable : </strong>"+telpor.value +"\n"
        + "<br/> <strong>Tel Professionelle : </strong>"+telpro.value +"\n"
        + "<br/> <strong>Adress Postal : </strong>"+adrpos.value +"\n"
        + "<br/> <strong>Code Postale : </strong>"+codepos.value +"\n"
        + "<br/> <strong>Ville : </strong>"+ville.value +"\n"
        + "<br/> <strong>Email  : </strong>"+idMail.value +"\n"
        + "<br/> <strong>Patron de La societe  : </strong>"+patron.value +"\n"
        + "</p>" ;

    }
    //---------- rendre la div synthese visible et injecter les valeur avec innerHTML-------

    blocDivSynthese.style.display = "block";
    blocDivSynthese.innerHTML = synthese ;


 


                    
}



 



