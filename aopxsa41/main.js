window.onload = function()
{
	var resposta = document.getElementById('resposta');
	resposta.onclick = apagaInput;
}
function apagaInput()
{
	var resposta = document.getElementById('resposta');	
	if(resposta.value == 'Digite aqui a resposta')
		resposta.value = '';
}

function getInfo() {
    var resposta = document.getElementById('resposta')
    var ttt = resposta.value
    if (ttt == null || ttt == "") {
        document.getElementById('resposta').value='Este campo não pode ficar em branco!';
		end;
    } 
	else
	if (ttt == "macaquinho"){
         window.location = "https://tijolinho.tk/okp7ns/";
         end;
    }
	else {
        document.getElementById('resposta').value='Resposta Incorreta';
		end;
    }
}

$('#resposta').keypress(function (e) {                                       
       if (e.which == 13) {
            e.preventDefault();
            getInfo()   
       }
});
