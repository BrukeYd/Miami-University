
window.addEventListener("resize", myFunction);
function myFunction(){
 
   var header = document.getElementsByTagName("header");
   var div = header[0].getElementsByTagName("div");
   var drpIcon = div[2].getElementsByTagName("img");
   var width = document.documentElement.offsetWidth;
   
   if(width < 1200)
   {
      div[0].setAttribute("style", "display: none;");
      div[2].setAttribute("style", "display: none;");
   }
   else
   {
      div[0].setAttribute("style", "display:inline-block");
      div[2].setAttribute("style", "display:grid");
   }
};