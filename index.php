<!doctype html>

<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Ticket to Ride</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="./View/style/app.css">
	</head>
	<body>

		<div id="app" class="containing-element">
			<router-view></router-view>
		</div>

		<!-- Other scripts -->
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
		<!-- Our custom views -->
		<script>
			var loginHTML = <?php echo json_encode(file_get_contents("./View/login.html"));?>;
			var gameHTML = <?php echo json_encode(file_get_contents("./View/game.html"));?>;
			var gamelistHTML = <?php echo json_encode(file_get_contents("./View/gamelist.html"));?>;
			var bankHTML = <?php echo json_encode(file_get_contents("./View/bank.html"));?>;
			var myinfoHTML = <?php echo json_encode(file_get_contents("./View/myinfo.html"));?>;
			var googlemapHTML = <?php echo json_encode(file_get_contents("./View/map.html"));?>;
		</script>

		<!-- Vue Packages -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js"></script>
		<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
		<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

		<!-- Our custom presenters and model -->
		<script src="./Model/clientmodel.js"></script>
		<script src="./Model/loginmodel.js"></script>
		<script src="./Model/mapmodel.js"></script>
		<script src="./ClientCommunicator/Command.js"></script>
		<script src="./ClientCommunicator/ServerProxy.js"></script>
		<script src="./Presenter/game.js"></script>
		<script src="./Presenter/gamelist.js"></script>
		<script src="./Presenter/login.js"></script>
		<script src="./Presenter/bank.js"></script>
		<script src="./Presenter/myinfo.js"></script>
		<script src="./Presenter/googlemap.js"></script>
		<script src="./index.js"></script>
		<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5zCN1jF7qJqZvLl2pYZ-aYnyObZtHJj4"></script>
	</body>
</html>