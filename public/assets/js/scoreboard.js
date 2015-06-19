$(document).ready(function () {
  $.getJSON('http://a3armory.com/www/scoreboard/json/?server=altis1',
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
        $('#altis1').append(tr);
      }
    }).done(function(json) {
      $('#altis1').dataTable({ responsive: true, order: [[ 2, "desc" ]], columnDefs: [ { targets: [1], orderable: false } ] });
      $('#altis1').fadeIn();
      $('#altis1_loading').hide(); 
    });

    $.getJSON('http://a3armory.com/www/scoreboard/json/?server=altis2',
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
        $('#altis2').append(tr);
      }
    }).done(function(json) {
      $('#altis2').dataTable({ responsive: true, order: [[ 2, "desc" ]], columnDefs: [ { targets: [1], orderable: false } ] });
      $('#altis2').fadeIn();
      $('#altis2_loading').hide(); 
    });

    $.getJSON('http://a3armory.com/www/scoreboard/json/?server=stratis',
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
        $('#stratis').append(tr);
      }
    }).done(function(json) {
      $('#stratis').dataTable({ responsive: true, order: [[ 2, "desc" ]], columnDefs: [ { targets: [1], orderable: false } ] });
      $('#stratis').fadeIn();
      $('#stratis_loading').hide(); 
    });
});