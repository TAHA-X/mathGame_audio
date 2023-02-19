var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var result = document.getElementById("result");
var karij = 0;
var start = document.getElementById("start");
var time = document.getElementById("time");
var amaliat = document.getElementById("amaliat");
var tray = document.getElementById("tray");
var sp2 = document.getElementById("sp2");
sp2.innerHTML = 20;
var box = document.getElementById("box");
var sp3 = document.getElementById("sp3");
var quite = document.getElementById("quite");
var ar9am = document.getElementById("ar9am");
var sp1;
var audio = document.getElementById("audio");
var jyd = document.getElementById("jyd");
var hawel = document.getElementById("hawel");
var tagier = document.getElementById("tagier");
var tag3amlia =  document.getElementById("tag3amlia");
var test = document.getElementById("test");
var audiostr = document.getElementById("audiostr");
function tagi(){
    tag3amlia.play();
    tagier.style.display = "none";
    test.style.display = "block";
    test.style.zIndex = "2";
}
function tes(){
    location.reload();
}
start.addEventListener("click",function(){
    audiostr.play();
});
function go() {
    var adad1 = Math.floor(Math.random()*13);
    var adad2 = Math.floor(Math.random()*13);
    var ralat1 = Math.floor(Math.random()*13);
    var ralat2 = Math.floor(Math.random()*13);
    var ralat3 = Math.floor(Math.random()*13);
    karij = adad1 * adad2;
    document.getElementById("adad1").innerHTML = adad1;
    document.getElementById("adad2").innerHTML = adad2;
    result.innerHTML = karij;
    num1.innerHTML = ralat1;
    num2.innerHTML = ralat2;
    num3.innerHTML = ralat3;
    start.addEventListener("click",function(){
        ar9am.style.display = "flex";
    });
}
start.addEventListener("click",function(){
    start.style.display = "none";
    quite.style.display = "block";
   var vset = setInterval(set,1000);
    function set(){
        sp2.innerHTML--;
        if(sp2.innerHTML == 0){
            box.style.display = "block";
            clearInterval(vset);
            time.style.display = "none";
            hawel.play();
        }
    }
    //num1

    num1.addEventListener("click",function(){
        if(num1.innerHTML == karij){
            go();
            clearInterval(vset);
            sp2.innerHTML = 20;
            start.style.display = "block";
            quite.style.display = "none";
            ar9am.style.display = "none";
            jyd.play();
        }
         else{
            ar9am.style.display = "none";
             audio.play();
            tray.style.display = "block";
            setTimeout(tra,1100);
             function tra() {
                tray.style.display = "none";
             }
             clearInterval(vset);
             sp2.innerHTML = 20;
             start.style.display = "block";
             quite.style.display = "none";
             start.addEventListener("click",function(){
                tray.style.display = "none"
            });
         }
    });

    //num2

    num2.addEventListener("click",function(){
        if(num2.innerHTML == karij){
            go();
            clearInterval(vset);
            sp2.innerHTML = 20;
            start.style.display = "block";
            quite.style.display = "none";
            ar9am.style.display = "none";
            jyd.play();
        }
         else{
            ar9am.style.display = "none";
            audio.play();
            setTimeout(tra,1100);
            function tra() {
               tray.style.display = "none";
            }
             tray.style.display = "block";
             clearInterval(vset);
             sp2.innerHTML = 20;
             start.style.display = "block";
             quite.style.display = "none";
             start.addEventListener("click",function(){
                tray.style.display = "none"
            });
         }
    });

    //num3

    num3.addEventListener("click",function(){
        if(num3.innerHTML == karij){
            go();
            clearInterval(vset);
            sp2.innerHTML = 20;
            start.style.display = "block";
            quite.style.display = "none";
            ar9am.style.display = "none";
            jyd.play();
        }
         else{
            ar9am.style.display = "none";
            audio.play();
            setTimeout(tra,1100);
            function tra() {
               tray.style.display = "none";
            }
             tray.style.display = "block";
             clearInterval(vset);
             sp2.innerHTML = 20;
             start.style.display = "block";
             quite.style.display = "none";
             start.addEventListener("click",function(){
                tray.style.display = "none"
            });
         }
    });

    //result

    result.addEventListener("click",function(){
        if(result.innerHTML == karij){
            go();
            clearInterval(vset);
            sp2.innerHTML = 20;
            start.style.display = "block";
            quite.style.display = "none";
            ar9am.style.display = "none";
            jyd.play();
        }
         else{
            ar9am.style.display = "none";
            audio.play();
            setTimeout(tra,1100);
            function tra() {
               tray.style.display = "none";
            }
             tray.style.display = "block";
             clearInterval(vset);
             sp2.innerHTML = 20;
             start.style.display = "block";
             quite.style.display = "none";
             start.addEventListener("click",function(){
                tray.style.display = "none"
            });
         }
    });
    quite.addEventListener("click",function(){
        clearInterval(vset);
             sp2.innerHTML = 20;
             quite.style.display = "none";
             start.style.display = "block";
             ar9am.style.display = "none";
    });
});
document.getElementById("btn").addEventListener("click",function(){
    location.reload();
});
go();