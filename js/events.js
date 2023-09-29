
window.addEventListener("resize", myFunction);
function myFunction(){
 
   var header = document.getElementsByTagName("header");
   var div = header[0].getElementsByTagName("div");
   var drpIcon = div[3].getElementsByTagName("img");
   var width = document.documentElement.offsetWidth;
   
   if(width < 1200)
   {
      div[0].setAttribute("style", "display: none;");
      div[2].setAttribute("style", "display: none;");
      drpIcon[0].setAttribute("style","height:60px;");
      header[0].setAttribute("style", "height:90px;")
      div[1].setAttribute("style","margin-top:20px; margin-right:15px;")
   }
   else
   {
      div[0].setAttribute("style", "display:inline-block");
      div[2].setAttribute("style", "display:grid");
   }
};
