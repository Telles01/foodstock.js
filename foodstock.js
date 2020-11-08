function validarProduto (idNomeProduto, idCodProduto, IdQuantidadeProduto){
  let nome = document.getElementById(idNomeProduto).value;
  let codigo = document.getElementById(idCodProduto).value;
  let qtidade = document.getElementById(idQtidade).value;


  if (nome == ""){
    alert("Nome do produto nao pode estar em branco.Favor prenche-lo");
    
  
  
  else if (codigo == ""){
    alert("Codigo do produto nao pode estar em branco.Favor prenche-lo");
    
  
  else cadastrarProduto(nome, codigo, parseInt(qtidade));


}

function cadastrarProduto (produto, codig, qtidade){
  let novoProduto = {nome:produto, codigo:codig, quantidade:qtidade};

  if (typeof(Storage)!= undefined){

  }
  else alert("A versao do seu navegador é muito antiga, por isso nao será possível executar a aplicacao.");

  
}


