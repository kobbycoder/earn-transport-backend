import mongoose from 'mongoose';
import config from 'config';

function connect() {
    mongoose.connect(config.get<string>('dbUri'))
    .then(() => {
        console.log('DB Connected!');
    }).catch((e) => {
        console.error(e);
        process.exit(1);
    })
}

export default connect