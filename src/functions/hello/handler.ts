import { middyfy } from '@libs/lambda';

import { sendResponse } from './../../libs/util';

const hello = async (event) => {
  const email = event.requestContext.authorizer.claims.email;
  const message = `Welcome to serverless, ${email}!`;
  return sendResponse(200, { message })
};

export const main = middyfy(hello);
