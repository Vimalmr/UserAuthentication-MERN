const mongoose = require("mongoose");

module.exports = () => {
	try {
		mongoose.set('strictQuery', true);
		mongoose.connect(process.env.DB);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
