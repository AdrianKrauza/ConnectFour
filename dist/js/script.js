"use strict";var board={Y:6,X:7},start=function(){for(var e=0;e<board.X;e++)document.getElementById("board").innerHTML+='<div id="'+e+'" class="boardHover"></div>';for(var t=0;t<board.Y;t++)for(var a=0;a<board.X;a++)t==board.Y-1?document.getElementById("board").innerHTML+='<div class="box can can'+a+' hover redHover"></div>':document.getElementById("board").innerHTML+='<div  class="box  '+a+' hover redHover"></div>'};start();var i=[0,0,0,0,0,0,0],winPos=[1,board.X,1-board.X,-board.X-1],win=function(){for(var e=function(e){if(document.getElementsByClassName("box")[e].childElementCount){var t=document.querySelector(".box:nth-child("+(e+1+board.X)+") .y").classList[document.querySelector(".box:nth-child("+(e+1+board.X)+") .y").classList.length-1];winPos.map(function(a){for(var o=0,s=1;4!=s&&((e+a*s)%board.X!=0||1!=a)&&(!((e+a*s)%board.X==0||e+a*s<0)||-6!=a)&&(!((e+a*s)%board.X==6||e+a*s<0)||-8!=a)&&!(e+a*s>board.X*board.Y-1&&7==a);s++)document.getElementsByClassName("box")[e+a*s].childElementCount&&document.querySelector(".box:nth-child("+(e+1+board.X+a*s)+") .y").classList[document.querySelector(".box:nth-child("+(e+1+board.X+a*s)+") .y").classList.length-1]==t&&o++;3==o&&(document.getElementById("win").innerHTML="red"==t?"Win red":"Win yellow",setTimeout(function(){document.getElementById("board").innerHTML=null,start(),document.getElementById("win").innerHTML=""},1e3))})}},t=0;t<document.getElementsByClassName("box").length;t++)e(t)};document.querySelector("#board").onclick=function(e){if(i[e.path[0].id]<=board.Y){i[e.path[0].id]++;var t=document.getElementsByClassName("can"+e.path[0].id)[0],a=document.getElementsByClassName("box")[board.Y*board.X-1-board.X-(board.X*i[e.path[0].id]-e.path[0].id-1)];document.getElementsByClassName("animated").length%2==1?t.innerHTML+='<div class="animated y yellow"></div>':t.innerHTML+='<div class="animated y red"></div>',t.classList.remove("can"+e.path[0].id),t.classList.remove("can"),t.classList.remove("hover"),i[e.path[0].id]<=board.Y-1?(a.classList.add("can"),a.classList.add("can"+e.path[0].id)):i[e.path[0].id]++;for(var o=0;o<document.getElementsByClassName("box").length;o++)for(var s=0;s<document.getElementsByClassName("box")[o].classList.length;s++){if("redHover"==document.getElementsByClassName("box")[o].classList[s]){document.getElementsByClassName("box")[o].classList.remove("redHover"),document.getElementsByClassName("box")[o].classList.add("yellowHover");break}if("yellowHover"==document.getElementsByClassName("box")[o].classList[s]){document.getElementsByClassName("box")[o].classList.remove("yellowHover"),document.getElementsByClassName("box")[o].classList.add("redHover");break}}win()}};