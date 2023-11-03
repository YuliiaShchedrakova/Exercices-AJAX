$(document).ready(function(){

$("#myBtn").click(function () {
    var filmNom = $("#search").val();
   
    fun1(filmNom);
  
   
    function fun1(filmNom) {
    //clé
    var key = "http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query="+filmNom;

    $.getJSON(key, function (data) {
     
    var information = data.results;

    var resultat = $("#alert");
    resultat.empty();
    
    // //boucle
  console.log(data[0])
    for (var i=0; i<information.length; i++) {
       
    var film = information[i];
   
    console.log(film)
    // //card (reponse)
    
    var resCard = `<div class="card" style="width: 18rem;">
    <img src="http://image.tmdb.org/t/p/w185/${film.poster_path}" class="card-img-top" alt="filmimg" >
    <div class="card-body">
    <h5 class="card-title fw-semibold">Titre:"${film.title}"</h5>
    <p class="card-text fst-italic">Date de release : "${film.release_date}"<br>
    Note utilisateurs: "${film.vote_average}"</p>
    <a href="#" class="btn btn-primary fw-semibold">Accueil</a>
    </div>`;
    resultat.append(resCard);
    
    };
    });
    };
});
});