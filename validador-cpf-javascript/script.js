
console.log('Carregando...');

function validaCPF(cpf) {

   // console.log(cpf.length);

    if (cpf.length != 11) {
        
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        
       var soma = 0;
       for (var i = 10; i > 1; i--) {
          soma += numeros.charAt(10 - i) * i;
       }
       

       var result = soma % 11 < 2 ? 0 : 11 - (soma % 11);

       //validação do primeiro digito
       if(result != digitos.charAt(0)) {
           return false;
       }

       soma = 0;
       numeros = cpf.substring(0, 10);

       for (var m = 11; m > 1; m--) {
           soma += numeros.charAt(11 - m) * m;
       }

       result = soma % 11 < 2 ? 0 : 11 - (soma % 11);

       //validação segundo digito

       if (result != digitos.charAt(1)) {
           return false;
       }
     
       return true;
    }
    
}

function validacao() {
    console.log('Iniciando validação, aguarde...');
   
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;
    
   var resultvalidacao = validaCPF(cpf);

   if (resultvalidacao) {
       document.getElementById('success').style.display = 'block';
   } else {
       document.getElementById('error').style.display = 'block';
   }
}