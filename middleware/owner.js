module.exports = function(req, res, next){
    if(!req.user.isOwner) return res.status(403).send('Access Denied. Not task owner.');
    next();
}