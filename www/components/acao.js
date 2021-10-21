var valor=0;

$(document).on("click", "#salvar", function(){
  localStorage.setItem(valor, $("#nome").val());
  valor++;

});

