
var countDownDate = new Date("Dec 15 , 2024 18:37:25").getTime();
var x = setInterval(function() {
  var counter = document.querySelector("#countdown") ;
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  counter.innerHTML = days + "يوم " + hours + "ساعة "
  + minutes + "دقيقة " + seconds + "ثانية ";
    
  if (distance < 0) {
    clearInterval(x);
    counter.innerHTML = "بادر بالتسجيل قبل انتهاء الوقت";
  }
}, 1000);

