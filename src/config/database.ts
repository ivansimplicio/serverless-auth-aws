export const mysql = require('serverless-mysql')({
  config: {
    host: 'serverless-api.cwxfbjetigjo.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'senha123',
    database: 'app'
  }
});