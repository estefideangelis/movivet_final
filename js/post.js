// JavaScript Document
$(function(){
	$("#cerrar").click(function(){
		navigator.app.exitApp();
	});
	
	$(document).ready(function(){
	$.ajax({
		url: 'http://movivet.tk/app/reservado.php',
		method: 'GET',
		type: 'json',
		success: function(data){
			$.each(data, function(i, elemento){
				var li = '<li class="ui-first-child"><a href="#reservado'+data[i].id+'" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + data[i].nombreUsuario + "-//-" + data[i].fecha +  "-//-" + data[i].hora + '</a></li>';
				
				$("#lista_reservas").append(li);

				$("#reservado" + data[i].id ).append(data[i].texto);
				
				
			});
			
			
		}
		
		});
	});
});


// con deviceready nos aseguramos que el dispositivo este listo para ser usado
$(document).bind('deviceready', function(){
    $(function(){
        $('form').submit(function(){
            var dataID = $(this).parent().attr('data-datos-id');
            var postData = $(this).serialize();
            $.ajax({
                type: 'POST',
                data: postData+'&lid='+dataID,
                // cargamos la url del servidor externo
                url: 'http://movivet.tk/app/guardar.php',
                success: function(data){
                    console.log(data);
					$('#nUsuario').val('');
                    $('#fecha').val('');
                    $('#hora').val('');
                    alert('Has reservado con exito');
                },
                error: function(data){
                    console.log(data);
                    alert('Ocurrio un error al reservar');
                }
            });
            return false;
        });
    });
});

