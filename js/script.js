$(document).ready(function() {
	
	//init
	$("#dest_v").attr("class", "tit_dest hover");
	$("#down_icon_1").fadeIn("slow");
	$("#det_v").fadeIn("slow");

	//render destaques_venda
	$("#dest_v").mouseover(function() {
		$("#dest_v").attr("class", "tit_dest hover");
		$("#dest_a").attr("class", "tit_dest");
		$("#down_icon_2").fadeOut("slow");
		$("#down_icon_1").fadeIn("slow");
		$("#det_v").fadeIn("slow");
	});

	//render destaques_aluguel
	$("#dest_a").mouseover(function() {
		$("#dest_a").attr("class", "tit_dest hover");
		$("#dest_v").attr("class", "tit_dest");
		$("#down_icon_1").fadeOut("slow");
		$("#down_icon_2").fadeIn("slow");
		$("#det_v").fadeOut("slow");
	});

}); 