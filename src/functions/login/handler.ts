import { loadUser } from './../../services/auth-service';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const login: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { email, password } = event.body;
  const accessToken = await loadUser(email, password);
  if(accessToken){
    return formatJSONResponse(200, { accessToken });
  }
  return formatJSONResponse(400, { message: 'invalid credentials' });
};

export const main = middyfy(login);
