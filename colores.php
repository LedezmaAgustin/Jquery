<html>
	<head>
		<script type="text/javascript" src="../jquery.js"></script>
		<script type="text/javascript" src="../jquery.js">
			var x;
			x=$(document);
			x.ready(inicio);

			function inicio(){
				var x;
				x=$("#animar");
				x.click(animate);
			}
			function animate(){
				var x=$("#objetivo");
				x.animate({height:300},"slow");
				x.animate({width:300},"3000");
				x.animate({height:100},"normal");
				x.animate({width:100},"1000");
			}
		</script>
		<style type="text/css">
			#objetivo{
				width: 200px;
				height: 200px;
				background-color: yellow;
				border:1px solid black;
			}
		</style>
	</head>
	<body>
		<input type="button" id="animar" value="animar">

		<div id="objetivo">Yo soy un div</div>
	</body>
</html>