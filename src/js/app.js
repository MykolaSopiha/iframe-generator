window.onload = function() {

  document.getElementById('fb_pixel_enable').addEventListener('change', function() {
	  let checkbox_status = (this.checked === true) ? 'block' : 'none';
	  let els = document.getElementsByClassName('fb-init-input');
	  Array.prototype.forEach.call(els, function(el) {
	    el.style.display = checkbox_status;
	  });
  });
	
};
