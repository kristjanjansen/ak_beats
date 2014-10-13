var stepNumber = 0;

$('.pad').on('click', function() {
  $(this).toggleClass('on')
})

var kick = new Tone.Player("./audio/kick.mp3")
var snare = new Tone.Player("./audio/snare.mp3")
var hihat = new Tone.Player("./audio/hihat.mp3")
var bongo = new Tone.Player("./audio/bongo.mp3")

kick.toMaster();
snare.toMaster();
hihat.toMaster();
bongo.toMaster();

Tone.Transport.setLoopEnd("1m");
Tone.Transport.loop = true;
Tone.Transport.setBpm(160);
Tone.Transport.setInterval(function(time) {
     stepNumber++;
     stepNumber = stepNumber % 4;
     console.log(stepNumber)
     $('.pad').removeClass('active')
  
     $('.col-0 #pad-' + stepNumber).addClass('active')
     $('.col-1 #pad-' + stepNumber).addClass('active')
     $('.col-2 #pad-' + stepNumber).addClass('active')
     $('.col-3 #pad-' + stepNumber).addClass('active')
  
     if ($('.col-0 #pad-' + stepNumber).hasClass('on')) { 
       kick.start()
     } else {
       kick.stop()
     }
     if ($('.col-1 #pad-' + stepNumber).hasClass('on')) {
       snare.start()
     } else {
       snare.stop()
     }
     if ($('.col-2 #pad-' + stepNumber).hasClass('on')) {
       hihat.start()
     } else {
       hihat.stop()
     }
     if ($('.col-3 #pad-' + stepNumber).hasClass('on')) {
       bongo.start()
     } else {
       bongo.stop()
     }
     
 }, "4n");

Tone.Transport.start();