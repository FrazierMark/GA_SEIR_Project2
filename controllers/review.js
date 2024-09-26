const FurnitureObject = require('../models/furnitureObject');
const User = require('../models/user');

const index = async (req, res) => {
	let furnitureData;
	try {
		furnitureData = await FurnitureObject.findById(req.params.id);
	} catch (error) {
		console.error(error);
	}
	res.render('review/index', {
		title: 'Product Review',
		furnitureDetails: furnitureData,
		objectPath: furnitureData.model,
	});
};

const newReview = (req, res) => {
	FurnitureObject.findById(req.params.id, function (err, furnitureItem) {
		req.body.user = req.user._id;
		req.body.userName = req.user.name;
		req.body.userAvatar = req.user.avatar;
		furnitureItem.reviews.push(req.body);
		furnitureItem.save(function (err) {
			res.redirect(`/discover/${furnitureItem._id}`);
		});
	});
};

function deleteReview(req, res, next) {
	FurnitureObject.findOne({ 'reviews._id': req.params.id }).then(function (
		item
	) {
		const review = item.reviews.id(req.params.id);
		if (!review.user.equals(req.user._id))
			return res.redirect(`/discover/${item._id}`);
		review.remove();
		item
			.save()
			.then(function () {
				res.redirect(`/discover/${item._id}`);
			})
			.catch(function (err) {
				return next(err);
			});
	});
}

function editReview(req, res, next) {
	FurnitureObject.findOne({ 'reviews._id': req.params.id }).then(function (
		item
	) {
		const review = item.reviews.id(req.params.id);
		if (!review.user.equals(req.user._id))
			return res.redirect(`/discover/${item._id}`);
		review.remove();
		item
			.save()
			.then(function () {
				res.redirect(`/discover/${item._id}`);
			})
			.catch(function (err) {
				return next(err);
			});
	});
}

module.exports = {
	index,
	new: newReview,
	delete: deleteReview,
	edit: editReview,
};
