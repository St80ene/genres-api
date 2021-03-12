const logFn = (req, res, next) => {
	console.log(`logging in process...`);
	next();
};

module.exports = logFn;