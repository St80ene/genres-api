const logFn = (req, res, next) => {
	console.log(`logged in...`);
	next();
};

module.exports = logFn;