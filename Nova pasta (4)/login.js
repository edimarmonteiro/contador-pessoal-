
function confirmar(){
    var nome = document.getElementById('nome_usuario');
    var email = document.getElementById('email_usuario');
    var senha = document.getElementById('senha_usuario');
    var confirmar = document.getElementById('senha_usuario_conf');

    window.location = "login.html";
    console.log(nome.value+email.value+senha.value)


    function entrar(){

        var nomelog = document.getElementById('nome_usuario_login');
        var senhlalog = document.getElementById('senha_usuario_login');

        if(nome == nomelog && senha == senhlalog){
            alert('Você é gay!!!!!!')
        } else{
            alert('Você contimua gay!!!!!!')
        }
    }
}
