const Joi = require('joi');

const validateGenre = (genre) => {
	const schema = Joi.object({
        genre: Joi.string().min(3).max(30).required()   
	});

    const { value, error } = schema.validate(genre, {abortEarly: false})
    
    if (error) throw error.details.map(error => error.message.replace(/"/g, ''))

    return value;
};


module.exports = validateGenre
