import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../.env' });

export const BE_HOST = process.env.BE_HOST || 'localhost:8080';
export const BE_URL = `http://${BE_HOST}/api`;