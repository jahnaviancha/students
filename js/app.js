$(function(){

	function getStudentsDropdown(){
		var html = '';
		html += '<ul class="nav navbar-nav">';
		html += '<li class="dropdown">';
  		html += '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Students <span class="caret"></span></a>';
  		html += '<ul class="dropdown-menu">';
    	html += '<li><a href="students/jahnavi/about.html">Jahnavi Ancha</a></li>';
    	html += '<li><a href="students/madhuri/about.html">Madhuri Pippalla</a></li>';
  		html += '</ul>';
		html += '</li>';
		html += '</ul>';
		return html;
	}

	$('#navbar').html(getStudentsDropdown());

});
