import dotenv from 'dotenv';

dotenv.config();

export default {
  port: 8080,
  dbUri: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.eoapey5.mongodb.net/?retryWrites=true&w=majority`
}
