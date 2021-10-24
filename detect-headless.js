function detectHeadless(){
  var headlessScore = 0
  try {
    new Audio();
  }
  catch (e) {
    document.body.innerHTML = document.body.innerHTML + "<p>[SUSPICIOUS] Audio not supported</p>";
    headlessScore++;
  }
  var filepicker = document.body.getElementById("file");
  filepicker.focus();
  if !(document.activeElement === filepicker){
    document.body.innerHTML = document.body.innerHTML + "<p>[REALLY SUSPICIOUS] Filepicker not focused even though it was forcefully focused</p>";
    headlessScore = headlessScore + 5;
  }
  if (navigator.webdriver){
    document.body.innerHTML = document.body.innerHTML + "<p>[SUREFIRE] navigator.webdriver === true. Were you even trying to evade?</p>";
    headlessScore = headlessScore + 10;
  }
  if (headlessScore >= 10){
    document.body.innerHTML = document.body.innerHTML + `<p>Headless Score is {headlessScore}, you are probably a robot!</p>`; // todo: are `` strings ES only or do they work in JS
    return headlessScore
  }
  if (headlessScore < 10 && headlessScore > 5) {
    // too lazy to finish this lol
    return headlessScore
  }
    
  
