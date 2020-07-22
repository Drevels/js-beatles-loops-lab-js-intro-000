const musicians = ["John", "Paul", "George", "Ringo"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instrunments){
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
      array.push(musicians[i] + " plays " + instruments[i]);
    }
  return array;
}
function johnLennonFacts(facts) {
 
  var array = [];
  var i = 0;
  while (array.length < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}
function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number += 1
  } while (number < 15);
  return array;
} 
