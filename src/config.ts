import * as dotenv from 'dotenv';
dotenv.config();
class Config {
  SEND_GRID_API = process.env.SEND_GRID_API;
  MAIL_CONFIRMATION_URL = process.env.MAIL_CONFIRMATION_URL;
  REDIS_CLUSTER_URL = process.env.REDIS_CLUSTER_URL;
  SENDER_ACCOUNT = process.env.SENDER_ACCOUNT;
}

export const _config = new Config();
