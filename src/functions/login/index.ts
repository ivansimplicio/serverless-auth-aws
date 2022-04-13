import { handlerPath } from '@libs/handler-resolver';

import schema from './schema';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'login',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
        cors: true,
      },
    },
  ],
  vpc: {
    securityGroupIds: [
      "sg-0c0a38f5029d52944"
    ],
    subnetIds: [
      "subnet-05eab8a66473d8dd7",
      "subnet-08fdc8f46ee89733d",
      "subnet-07fa0eb93053cfc9d",
      "subnet-036a1a12df6a9e8b4",
      "subnet-09c05fa1be8f9891c",
      "subnet-0dbad941deb5c9eb4"
    ]
  }
};
