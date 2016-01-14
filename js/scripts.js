$(document).ready(function(){
  $("form#character").submit(function(event) {
    $("#result").empty();

    var deathStarAnswer = $("input[name=deathStar]:checked").val();
    var hothAnswer = $("input[name=hoth]:checked").val();
    var cloudCityAnswer = $("input[name=cloudCity]:checked").val();
    console.log(cloudCityAnswer, hothAnswer, deathStarAnswer);

    if ((deathStarAnswer === "vader" && hothAnswer === "vader" && cloudCityAnswer === "vader") || (deathStarAnswer === "vader" && hothAnswer === "vader") || (deathStarAnswer === "vader" && cloudCityAnswer === "vader") || (cloudCityAnswer === "vader" && hothAnswer === "vader")) {
      console.log("vader");
    }
    // if (gender === "female" && profession === "musician") {
    //   $("#result").append('<img src="img/beyonce.jpeg">');
    // } else if (gender === "female" && profession === "actor") {
    //   $("#result").append('<img src="img/daisy.jpg">');
    // } else if (gender === "female" && profession === "athlete") {
    //   $("#result").append('<img src="img/serena.jpg">');
    // } else

    event.preventDefault();
  });
});
