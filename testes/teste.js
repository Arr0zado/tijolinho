function getInfo2() {
    var resposta = document.getElementById('resposta')
    var ttt = resposta.value
    if (ttt == null || ttt == "") {
        document.getElementById('resposta').value='Este campo não pode ficar em branco!';
		end;
    } 
	else
	if (ttt == "arco iris"){
         window.location = "https://po.ta.to";
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