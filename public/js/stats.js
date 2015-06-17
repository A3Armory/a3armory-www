$(document).ready(function () {
  $.getJSON('http://a3armory.com/www/leaderboard/json',
    function (json) {
      var tr;
      for (var i = 0; i < json.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + json[i]['rank'] + "</td>");
        tr.append("<td style=\"color: #357EBD;\">" + json[i]['fields']['PlayerInfo.Name'] + "</td>");
        tr.append("<td>" + json[i]['fields']['PlayerScore.playerKills'] + "</td>");
        tr.append("<td>" + json[i]['fields']['PlayerScore.kdr'] + "</td>");
        tr.append("<td>" + json[i]['fields']['PlayerScore.aiKills'] + "</td>");
        tr.append("<td>" + json[i]['fields']['PlayerScore.deathCount'] + "</td>");
        tr.append("<td>" + json[i]['fields']['PlayerScore.reviveCount'] + "</td>");
        tr.append("<td>" + json[i]['fields']['PlayerScore.captureCount'] + "</td>");
        tr.append("<td><span data-livestamp=\"" + json[i]['fields']['updatedAt_'].toString().slice(0,-3) + "\"></span></td>");
        $('#leaderboard').append(tr);
      }
    }).done(function(json) {
      $('#leaderboard').dataTable({ responsive: true, columnDefs: [ { targets: [1,8], orderable: false } ] });
      $('#leaderboard').show();
      $('#loading').hide(); 
    });
});