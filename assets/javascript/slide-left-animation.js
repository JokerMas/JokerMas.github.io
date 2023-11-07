/*------------------slide-left-------------*/
function scrollAppear() {
  var introTexts = document.querySelectorAll('.slide-left');
  var introPositions = [];
  var screenPosition = window.innerHeight / 1.5;

  for (var i = 0; i < introTexts.length; i++) {
    var introText = introTexts[i];
    var introPosition = introText.getBoundingClientRect().top;
    introPositions.push(introPosition);
  }

  for (var i = 0; i < introPositions.length; i++) {
    if (introPositions[i] < screenPosition) {
      introTexts[i].classList.add('slide-left-appear');
    }
  }
}
window.addEventListener('scroll', scrollAppear);
