// Users Controller - handles user logic and user profile logic

module.exports = function (models, logger) {

	return {

		/*
		 * Find User By Name for Login method
		 */
		findPost: function (name, callback) {
			models.Rent.findOne({
				"post": name
			}, " _id post avgRent avgInc avgMortgage", function (error, post) {
				if (error) {
					logger.info('Post', error);
				}
				callback(post);
			});
		},

		findAllNum: function (cut, callback) {
			models.Rent.find({})
				.skip(cut * 30).limit(30)
				.exec(function (error, place) {
					callback(place);
				});
		},

		findCheapest: function (cut, callback) {
			models.Rent.find({})
				.sort({
					"avgRent": 1
				}).skip(cut * 30).limit(30)
				.exec(function (error, place) {
					callback(place);
				});
		},

		findExp: function (cut, callback) {
			models.Rent.find({})
				.sort({
					"avgRent": -1
				}).skip(cut * 30).limit(30)
				.exec(function (error, place) {
					callback(place);
				});
		},
		findMostPaid: function (cut, callback) {
			models.Rent.find({})
				.sort({
					"avgIct": 1
				}).skip(cut * 30).limit(30)
				.exec(function (error, place) {
					callback(place);
				});
		},
		findLeastPaid: function (cut, callback) {
			models.Rent.find({})
				.sort({
					"avgIct": -1
				}).skip(cut * 30).limit(30)
				.exec(function (error, place) {
					callback(place);
				});
		},

		addRentPrice: function (post, callback) {
			models.Rent.find({}, function (data) {

			})
		},


		/*
		 * User Methods
		 */

		/*
		 * Get All Users
		 */
		getPlaces: function (callback) {
			models.Rent.find({}, function (error, user) {
				if (error) {
					logger.info('Users', error);
				}
				callback(user);
			});
		},

		/*
		 * Find User By Id
		 */
		findById: function (id, callback) {
			models.Rent.findById(id, function (error, user) {
				if (error) {
					logger.info('Users', error);
				}
				callback(user);
			});
		},

		/*
		 * Create New User
		 */
		createPlace: function (data, callback) {
			var place = new models.Rent(data);
			place.save(function (error, data) {
				if (error) {
					console.log(error);
				}
				console.log("NEW Place CREATED id: " + place._id);
				callback(place);
			});
		},

		/*
		 * Update User by Id
		 */
		updatePlace: function (id, data) {
			models.Rent.findByIdAndUpdate(id, data, function (error, number, raw) {
				if (error) {
					logger.info('Users', error);
				}
			});
		},

		/*
		 * Delete User by Id
		 */
		deletePlace: function (id) {
			models.Rent.findByIdAndRemove(id, function (error) {
				if (error) {
					logger.info('Users', error);
				}
			});
		},

		/*addImages: function (profileId, data) {
			models.UserProfile.findById(profileId, function (error, profile) {
				profile._images.push(data);
				console.log(data);
				profile.save();
			});
		},*/

		/*
		 * Drop tables
		 *
		 */
		drop: function (callback) {
			models.Rent.remove({}, function (error) {
				if (callback) {
					callback();
				}
			});
		}
	};
};