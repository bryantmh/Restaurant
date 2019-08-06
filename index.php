<!doctype html>

<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Restaurant Schedule</title>
		<link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap/dist/css/bootstrap.min.css">
        <link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css">
		<link rel="stylesheet" type="text/css" href="./View/style/app.css">
	</head>
	<body>

		<div id="app" class="containing-element">
			<router-view></router-view>
		</div>

		<!-- Custom View -->
		<script>
			var homeHTML = <?php echo json_encode(file_get_contents("./View/home.html"));?>;
		</script>

		<!-- Vue Packages -->
		<script src="https://unpkg.com/vue"></script>
        <script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.js"></script>
		<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
		<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

		<!-- Custom Model and Controller -->
		<script src="./Controller/home.js"></script>
		<script src="./index.js"></script>


		
	</body>
</html>