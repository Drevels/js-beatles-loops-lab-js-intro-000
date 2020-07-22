const musicians = ["John", "Paul", "George", "Ringo"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instrunments){
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
      array.push(musicians[i] + " plays " + instruments[i]);
    }
  return array;
}
function johnLennonFacts() {
  var facts = ["While on tour, he enjoyed playing Monopoly","Harmonica was the first instrument Lennon learned to play","He was the last Beatle to learn to drive", "He was never a vegetarian",];
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
