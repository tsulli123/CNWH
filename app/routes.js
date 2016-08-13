module.exports = function (app, controller, fs) {

	//file paths
	var paths = {
		buildFiles: {
			root: './www'
		}
	}

	//main routing

	//landing page
	app.get('/', function (req, res) {
		res.sendFile('index.html', paths.buildFiles);
	});



	app.get('/data/cheapest/:cut', function (req, res) {
		controller.Rent.findCheapest(req.params.cut, function (data) {
			res.send(data);
		});
	});

	app.get('/data/expensive/:cut', function (req, res) {
		controller.Rent.findExp(req.params.cut, function (data) {
			res.send(data);
		});
	});

	app.get('/data/mostInc/:cut', function (req, res) {
		controller.Rent.findMostPaid(req.params.cut, function (data) {
			res.send(data);
		});
	});

	app.get('/data/leastInc/:cut', function (req, res) {
		controller.Rent.findLeastPaid(req.params.cut, function (data) {
			res.send(data);
		});
	});
	app.get('/data/popular/:cut', function (req, res) {
		controller.Rent.findMostPop(req.params.cut, function (data) {
			res.send(data);
		});
	});
	app.get('/data/unpopular/:cut', function (req, res) {
		controller.Rent.findLeastPop(req.params.cut, function (data) {
			res.send(data);
		});
	});

	app.get('/data/postcode/:post', function (req, res) {
		controller.Rent.findPost(req.params.post, function (data) {
			res.send(data);
		});
	});

	app.get('/data/test', function (req, res) {
		controller.Rent.getPosts(function (data) {
			res.send(data);
		})
	});

	app.get('/data/:cut', function (req, res) {
		controller.Rent.findAllNum(req.params.cut, function (data) {
			res.send(data);
		});
	});

	app.get('*', function (req, res) {
		res.send('Hi, I think you went to a wrong url there buddy', 404);
	});




};