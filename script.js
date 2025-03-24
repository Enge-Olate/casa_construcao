$(document).ready(function(){
    function cheqTamanho(){
        if($(window).width() <= 430){
            $('aside').hide();
        }
        else{
            $('aside').show();
        }
    }

    cheqTamanho()
    $(window).resize(function () { 
        cheqTamanho();
    });
    function mostraSobeNos(){
        $('#sobre_us').click(function (e) { 
            e.preventDefault();
            $('aside').show().insertBefore('.conteudo');
        });
    }
    mostraSobeNos();
});