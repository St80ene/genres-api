const authenticateFn = (req, res, next) => {
	console.log(`Authenticating in process...`);
	next();
};

module.exports = authenticateFn;