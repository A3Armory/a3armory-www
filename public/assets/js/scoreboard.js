function scoreboard (score_url, score_name) {
  $(document).ready(function () {
    $.getJSON(score_url,
      function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
          tr = $('<tr/>');
          var team = json[i]['PlayerInfo']['LastGroupSide'];
          tr.append("<td id='PlayerTeam'>" + "<li class='" + team + "'>" + team + "</li></td>");
          tr.append("<td id='PlayerName' style=\"color: #357EBD;\">" + json[i]['PlayerInfo']['Name'] + "</td>");
          tr.append("<td id='PlayerKills'>" + json[i]['PlayerScore']['playerKills'] + "</td>");
          tr.append("<td id='PlayerAI'>" + json[i]['PlayerScore']['aiKills'] + "</td>");
          tr.append("<td id='PlayerDeath'>" + json[i]['PlayerScore']['deathCount'] + "</td>");
          tr.append("<td id='PlayerRevive'>" + json[i]['PlayerScore']['reviveCount'] + "</td>");
          tr.append("<td id='PlayerCapture'>" + json[i]['PlayerScore']['captureCount'] + "</td>");
          $(score_name).append(tr);
        }
      }).done(function(json) {
        $(score_name).dataTable({ responsive: true, order: [[ 2, "desc" ]], columnDefs: [ { targets: [1], orderable: false } ] });
        $(score_name).fadeIn();
        $(score_name+'_loading').hide(); 
      });
  });
}

scoreboard("http://a3armory.com/www/scoreboard/json/?server=altis1", "#altis1");
scoreboard("http://a3armory.com/www/scoreboard/json/?server=altis2", "#altis2");
scoreboard("http://a3armory.com/www/scoreboard/json/?server=stratis", "#stratis");