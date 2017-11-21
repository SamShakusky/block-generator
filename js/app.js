"use strict";

(function blockGen() {
	//cache DOM
	var $form = $('.form'),
		$entity = $form.children('div'),
		$checkbox = $form.find('input'),
		$select = $form.find('select'),
		$result = $('.result'),
		$resultText = $result.find('p');
	
	//bind events
	$checkbox.on('change',getPicture);
	$select.on('change',getPicture);
	
	function getPicture() {
		var result = '';
		$entity.each(function(){
			if($('input',this).prop('checked')) result += $('select',this).val();
			else result += 0;
		})
//		$resultText.text(result);
		$result.css('background-image','url(src/'+result+'.jpg)');
		console.log($result);
	}
})();