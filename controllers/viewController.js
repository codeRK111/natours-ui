const Tour = require('./../models/tourModel');
const catchAsync = require('./../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();
  res.render('overview', {
    title: 'All tours',
    tours
  });
});
exports.getTourDetails = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });
  res.render('tour', {
    title: 'All tours',
    tour
  });
});

exports.getTour = (req, res) => {
  res.render('tour', {
    title: 'The forest hiker'
  });
};
