$(document).ready(function(){
  $("form#character").submit(function(event) {
    $("#result").empty();

    var deathStarAnswer = $("input[name=deathStar]:checked").val();
    var hothAnswer = $("input[name=hoth]:checked").val();
    var cloudCityAnswer = $("input[name=cloudCity]:checked").val();
    console.log(cloudCityAnswer, hothAnswer, deathStarAnswer);

    if ((deathStarAnswer === "vader" && hothAnswer === "vader" && cloudCityAnswer === "vader") || (deathStarAnswer === "vader" && hothAnswer === "vader") || (deathStarAnswer === "vader" && cloudCityAnswer === "vader") || (cloudCityAnswer === "vader" && hothAnswer === "vader")) {
      $("#result").append('<img src="img/vader.jpeg">');
    } else if ((deathStarAnswer === "han" && hothAnswer === "han" && cloudCityAnswer === "han") || (deathStarAnswer === "han" && hothAnswer === "han") || (deathStarAnswer === "han" && cloudCityAnswer === "han") || (cloudCityAnswer === "han" && hothAnswer === "han")) {
      $("#result").append('<img src="img/han.jpg">');
    } else if ((deathStarAnswer === "chewie" && hothAnswer === "chewie" && cloudCityAnswer === "chewie") || (deathStarAnswer === "chewie" && hothAnswer === "chewie") || (deathStarAnswer === "chewie" && cloudCityAnswer === "chewie") || (cloudCityAnswer === "chewie" && hothAnswer === "chewie")) {
      $("#result").append('<img src="img/chewie.jpg">');
    } else {
      $("#result").append('<p>Please try again.</p>');
    }

    event.preventDefault();
  });
});
