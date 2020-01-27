import mongoose from 'mongoose';

class USER {
	constructor() {
		const { Schema } = mongoose;
		const connectionString = process.env.MONGO_STRING as string;
		const connection = mongoose.connection;
		mongoose.connect(connectionString, { useNewUrlParser: true }, (err: any) => {
			if (!err) {
				console.log('Successfully Established Connection with MongoDB');
			} else {
				console.log('Failed to Establish Connection with MongoDB with Error: ' + err);
			}
		});

		connection.once('open', () => {
			console.log(`this is fired in open event`);
		});

		connection.on('error', console.error.bind(console, 'connection error'));
	}
}

export default new USER();
