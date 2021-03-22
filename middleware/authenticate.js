const authenticateFn = (req, res, next) => {
	console.log(`Authenticated...`);
	next();
};

module.exports = authenticateFn;