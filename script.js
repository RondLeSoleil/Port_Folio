var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("clear-theme");
    if(document.body.classList.contains("clear-theme")){
        icon.src ="images/moon.png";
    }else{
        icon.src ="images/sun.png";
    }
  

}