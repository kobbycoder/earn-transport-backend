import mongoose from 'mongoose';
import config from 'config';
import logger from '../utils/logger'

function connect() {
    mongoose.connect(config.get<string>('dbUri'))
    .then(() => {
        logger.info('DB Connected!');
    }).catch((e) => {
        logger.error(e);
        process.exit(1);
    })
}

export default connect