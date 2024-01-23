var countDown = new Date("May  9, 2024 00:00:00").getTime()
var x = setInterval(function(){

    var now = new Date().getTime()
    var distance = countDown-now
    var days = Math.floor(distance/(1000*60*60*24))
    var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
    var minutes= Math.floor((distance%(1000*60*60))/(1000*60))
    var seconds = Math.floor((distance%(1000*60))/1000)

    document.getElementById("days").innerHTML=zero(days)
    document.getElementById("hours").innerHTML=zero(hours)
    document.getElementById("minutes").innerHTML=zero(minutes)
    document.getElementById("seconds").innerHTML=zero(seconds)

    function zero(num){
        return num<10?"0"+num:num
    }
    

    if(distance<0){
        clearInterval(x)
       document.getElementById("days").innerHTML="00"
      document.getElementById("hours").innerHTML="00"
      document.getElementById("minutes").innerHTML="00"
      document.getElementById("seconds").innerHTML="00"
    }
},1000)