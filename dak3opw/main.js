window.onload = function()
{
	var resposta = document.getElementById('resposta');
	resposta.onclick = apagaInput;
}
function apagaInput()
{
	var resposta = document.getElementById('resposta');	
	if(resposta.value == 'Digite aqui a sua resposta')
		resposta.value = '';
}

function getInfo() {
    var resposta = document.getElementById('resposta')
    var ttt = resposta.value
    if (ttt == null || ttt == "") {
        document.getElementById('resposta').value='E̶s̵t̶e̸ ̸c̴a̵m̴p̸o̷ ̶n̸ã̶o̶ ̶p̷o̷d̴e̵ ̷f̴i̷c̷a̶r̵ ̶e̵m̸ ̴b̶r̵a̷n̶c̸o̷!̸';
		end;
    } 
	else
	if (ttt == "erro 404"){
         window.location = "https://tijolinho.tk/k03tx6/";
         end;
    }
	else {
        document.getElementById('resposta').value='R̸e̶s̸p̶o̵s̷t̸a̸ ̸I̴n̸c̴o̸r̷r̶e̸t̵a̸';
		end;
    }
}

$('#resposta').keypress(function (e) {                                       
       if (e.which == 13) {
            e.preventDefault();
            getInfo()   
       }
});
