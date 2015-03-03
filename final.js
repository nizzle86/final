var team = [];
var ssfc = new Team("Seattle Sounders", 95);
var timbers = new Team("Portland Timbers", 2);
var rsl = new Team("Real Salt Lake", 67);
var skc = new Team("Sporting Kansas City", 72);
var lag = new Team("LA Galaxy", 50);
var nyrb = new Team("New York Red Bulls", 43);
var nycfc = new Team("NYCFC", 10);
var vwc = new Team("Vancoucer White Caps", 56);
var col = new Team("Colorado Rapids", 88);
var clb = new Team("Colombus Crew", 38);
var chi = new Team("Chicago Fire", 46);
var tor = new Team("Toronto FC", 16);
var dc = new Team("DC United", 36);
var dal = new Team("FC Dallas", 27);
var hou = new Team("Houston Dynamo", 65);


function Team(name, rank){
  this.name = name;
  this.rank = rank;
  team.push(this);
  
  this.toHTML = function(){
    
    return "<div class='teamdata'>" + "<li data-rank="+ this.rank+">" + this.name + " " + this.rank + "</li>" + "</div>";
  };

$('#teams').append(this.toHTML());
}

function shuffle(m) {
    var rand, $rand;
    rand = Math.floor(Math.random() * m--);
    $('.teamdata:eq(' + m + ')').
      after($('.teamdata:eq(' + rand + ')')).
      insertBefore($('.teamdata:eq(' + rand + ')'))
    if(m) {
      setTimeout(shuffle, 200, m);
    }
  };

var $teamdata = $('.team');

function bubblesort($teamdata){
  var i, j, swapped;
  do{
    swapped = false;
    for (j = 1; j <= $teamdata.length - 1; j++){
      var j0 = j-1;
      var width0 = $('.teamdata:eq('+ j0 + ')').width();
      var width1 = $('.teamdata:eq('+ j + ')').width();
      while (width0 > width1){
        var $temp = $('.teamdata:eq(' + j + ')');
          $('.teamdata:eq('+ j +')').replaceWith($('.teamdata:eq('+ j0 +')'));;
          $('.teamdata:eq('+ j0 + ')').before($temp);
        width0 = $('.teamdata:eq('+ j0 + ')').width();
        width1 = $('.teamdata:eq('+ j + ')').width();
        swapped = true;
      }
    }
  } while (swapped);
  return($teamdata);
}



$('#shuffle').on('click', function(){
  shuffle(Teams.length);  
});

$('#bubble').on('click', function(){
  bubblesort($teamdata);
});

$('#insertion').on('click', function(){
  insertionshuffle($teamdata);  
});

