function showKulliyyahs(){
    var decider = document.getElementById("box")
    if(decider.checked){
        //alert('check');
        document.getElementById("kul").style.display = "block";
    } else {
      //alert('unchecked');
      document.getElementById("kul").style.display = "none";
    }
}