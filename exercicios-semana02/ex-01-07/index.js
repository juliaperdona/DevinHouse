function submitFormContact() {
    //Obtem os elementos do formulário
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var descricao = document.getElementById('descricao');
  
    console.log(
      'Formulário de contato:',
      '\nNome: ' + nome.value,
      '\nE-mail: ' + email.value,
      '\nDescrição: ' + descricao.value
    );
  
  
    swal('Formulário enviado');
  
  }
