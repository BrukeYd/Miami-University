function mouseOver(){
    //alert('working');
}
var windows = document.documentElement.clientWidth ; 

function onResize()
{
    if(document.documentElement.clientWidth < 500)
    {
        alert('windows is minimized');
    }
    else
    {
        alert('it good to go');
    }
}
