!function(){if(window.addEventListener&&document.querySelector){var t=document.documentElement;t.classList.remove("no-js"),t.classList.add("js")}}(),
function(){var t=document.querySelector(".navbar");document.querySelector(".nav-trigger__icon")}(),
function(){var t=function(t,e,i){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(i,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};
t.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var i=this,n=200-100*Math.random();this.isDeleting&&(n2/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n2=500):(n2=this.period,this.isDeleting=!0),
setTimeout(function(){i.tick()},n2)},
window.onload=function()
{
    for(var e=document.getElementsByClassName("typewrite"),
i=0;i<e.length;i++){var n2=e[i].getAttribute("data-type"),
s=e[i].getAttribute("data-period");
n2&&new t(e[i],JSON.parse(n2),s)
}
var o=document.createElement("style");o.type="text/css",document.body.appendChild(o)}}(),
function(){var t=document.getElementById("stickynav");t&&(window.onscroll=function(){document.body.scrollTop>69?t.classList.add("stuck"):t.classList.remove("stuck")})}(),
function(){for(var t=document.querySelectorAll(".accordion"),e=0;e<t.length;e++)t[e].addEventListener("click",
function(t){if(console.log("hiii"),t.target!==t.currentTarget){var e=t.target;e.classList.contains("accordion__btn")&&e.classList.toggle("accordion__btn--active")}t.stopPropagation()})}();