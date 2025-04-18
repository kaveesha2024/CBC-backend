const blockUser = (req, res, next) => {
    if (!req.user) {
        next ();
        return;
    }
    if (req.user.isBlocked) {
        return res.status(401).json({
            message: "You have been blocked by administrator!, can not access this site!",
        });
    }else {
        next();
    }
};
export default blockUser;