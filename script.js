function getRandomPlayers() {

  var players;

  $.ajax({

    url: "https://www.boolean.careers/api/array/basket?n=10",
    metodo: "GET",
    success: function(data, state) {

      if (data.success) {

        players = data.response;
        updateImput(players);

        var input = $("#usr-input");
        var button = $("#clear-btn");

        input.change(function() {
          playerSelector(players)
        });
        $(document).on("click", ".sidebar > p", function() {

          var me = $(this);
          var selId = me.text();

          for (var i = 0; i < players.length; i++) {

            var player;

            if (selId == players[i].playerCode) {
              player = players[i]
            }
          }

          var id = $("#id > span.content");
          var points = $("#points > span.content");
          var bounce = $("#bounce > span.content");
          var mistake = $("#mistake > span.content");
          var twoPerc = $("#twoPerc > span.content");
          var threePerc = $("#threePerc > span.content");

          id.text(player.playerCode);
          points.text(player.points);
          bounce.text(player.rebounds);
          mistake.text(player.fouls);
          twoPerc.text(player.twoPoints);
          threePerc.text(player.threePoints);
        });
        button.click(clearButton);
      }

    },
    error: function(request, state, error) {

      alert("L'indirizzo del server è sbagliato");
    }
  })

}

function updateImput(players) {

  for (var i = 0; i < players.length; i++) {

    var player = players[i];
    var object = document.createElement("option");

    object.value = player.playerCode;
    $("#players").append(object);

    var data = {
      id: player.playerCode
    }

    var template = $("#box-template").html();
    var compiled = Handlebars.compile(template);
    var finalhtml = compiled(data);

    $(".sidebar").append(finalhtml)
  }
}

function playerSelector(players) {

  var me = $("#usr-input");
  var selId = me.val();

  for (var i = 0; i < players.length; i++) {

    var player;

    if (selId == players[i].playerCode) {
      player = players[i]
    }
  }

  var id = $("#id > span.content");
  var points = $("#points > span.content");
  var bounce = $("#bounce > span.content");
  var mistake = $("#mistake > span.content");
  var twoPerc = $("#twoPerc > span.content");
  var threePerc = $("#threePerc > span.content");

  id.text(player.playerCode);
  points.text(player.points);
  bounce.text(player.rebounds);
  mistake.text(player.fouls);
  twoPerc.text(player.twoPoints);
  threePerc.text(player.threePoints);
}

function clearButton() {

  var input = $("#usr-input");
  input.val("");

  var id = $("#id > span.content");
  var points = $("#points > span.content");
  var bounce = $("#bounce > span.content");
  var mistake = $("#mistake > span.content");
  var twoPerc = $("#twoPerc > span.content");
  var threePerc = $("#threePerc > span.content");

  id.text("");
  points.text("");
  bounce.text("");
  mistake.text("");
  twoPerc.text("");
  threePerc.text("");
}

function init() {

  getRandomPlayers();
}

$(document).ready(init);
