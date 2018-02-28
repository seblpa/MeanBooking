
const onlyMe = (req,res,next) => {
    if ( req.user._id == req.params.id || req.user.role === "admin" ) {
        next();
    }else{
        console.log("[Forbidden] User cannot access this page");
        res.redirect('/');
    }
}

module.exports = onlyMe;