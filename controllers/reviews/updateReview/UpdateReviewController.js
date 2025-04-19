import ReviewModel from "../../../models/review/ReviewModel.js";

const updateReviewController = async (req, res) => {
  if (!req.user) {
    res.status(401).json({
      message: "You have to sign in first!",
    });
    return;
  }
  if (req.user.isAdmin) {
    const reviewId = req.query.reviewid;
    if (!reviewId) {
      res.status(401).json({
        message: "Review id is missing!",
      });
      return;
    }
    try {
      const response = await ReviewModel.updateOne({ _id: reviewId }, req.body);
      res.status(200).json(response);
    }
    catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }else {
    res.status(401).json({
      message: "You are not authorized to access this page!",
    });
  }
};
export default updateReviewController;