function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, conteudo, pag;
    conteudo = document.getElementsByClassName("conteudo");
    for (i = 0; i < conteudo.length; i++) {
      conteudo[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    pag = document.getElementsByClassName("pag");
    for (i = 0; i <pag.length; i++) {
      pag[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("padrao").click();