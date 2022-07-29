const SERVER_NAME = process.env.SERVER_NAME || "The Server by Twy'r";
process.title = SERVER_NAME;

global.snooze = async (ms) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};
