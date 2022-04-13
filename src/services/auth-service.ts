import jwt from 'jsonwebtoken';
import { mysql } from 'src/config/database';

export const loadUser = async (email: string, password: string) => {
  const result = await mysql.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`);
  if(result.length !== 0) {
    return jwt.sign({ id: result[0].id, email: result[0].email }, 'db8cfb66-bb59-11ec-8422-0242ac120002');
  }
  return null;
}