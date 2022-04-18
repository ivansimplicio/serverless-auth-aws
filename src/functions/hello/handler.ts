import { middyfy } from '@libs/lambda';

import { sendResponse } from './../../libs/util';

const hello = async (event) => {
  const email = event.requestContext.authorizer.claims.email;
  const message = `Bem-vindo ao serverless ${email}`;
  return sendResponse(200, { message })
};

export const main = middyfy(hello);
