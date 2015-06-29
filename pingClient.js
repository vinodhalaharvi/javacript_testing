<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title></title>
</head>
<body>
    <script>
      $("form").submit(function(evt) {
	evt.preventDefault();
	(function() {
	  $.ajax({
	    url: "localhost:8000/ping",
	    dataType: "json",
	    method: "post", 
	    data: $('form').serialize(), 
	    error: function(jqXHR, textStatus, errorThrown) {
	      return $('#output').append("AJAX Error: " + textStatus);
	    },
	    success: function(data, textStatus, jqXHR) {
	      return $('#output').append("Successful AJAX call: " + data);
	    }
	  });
	}).call(this);
      });
    </script>

    <div class="form">
	<form action="localhost:8000/ping" method="post" onclick="return false;">
	    <input value="" type="" name="" textarea="" width = "250px"/>
	    <input value="" type="submit" name="" value="Go" />
	</form>
    </div>
    <div id="output"></div>

</body>
</html>
