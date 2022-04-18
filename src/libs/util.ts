export const sendResponse = (statusCode, body) => {
  const response = {
      statusCode,
      body: JSON.stringify(body),
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
      }
  }
  return response
}