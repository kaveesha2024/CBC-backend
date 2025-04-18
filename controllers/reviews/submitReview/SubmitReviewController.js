import ReviewModel from "../../../models/review/ReviewModel.js";

const submitReviewController = async (req, res) => {
  if (!req.user) {
    res.status(401).json({
      message: "You have to sign in first!",
    });
    return;
  }
  if (!req.body) {
    res.status(400).json({
      message: "You haven't provide any detail",
    });
    return;
  }

  if (!req.body.comment) {
    res.status(400).json({
      message: "You haven't provide any comment",
    });
    return;
  }

  try {
    const review = new ReviewModel({
      productId: req.body.productId,
      comment: req.body.comment,
      images: req.body.images,
      customerName: req.user.firstName + " " + req.user.lastName,
    });
    const response = await review.save();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};
export default submitReviewController;
