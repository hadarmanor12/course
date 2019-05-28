(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i in names) {
  var str = names[i].toLowerCase();
  var firstLetter =str.charAt(0)
  if(firstLetter=='j'){
    byeSpeaker.speak(names[i]);
  }
  else {
    helloSpeaker.speak(names[i]);
  }
}
})();

