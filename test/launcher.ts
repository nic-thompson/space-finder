import { handler } from '../src/services/spaces/handler';

process.env.AWS_REGION = 'eu-west-2';
process.env.TABLE_NAME = 'SpaceStack-0206bbe135bd';

handler(
  {
    httpMethod: 'DELETE',
    queryStringParameters: {
      id: '5302021e-5341-4acf-85a5-e05adc15c949',
    },
    // body: JSON.stringify({
    //   location: 'San Francisco updated',
    // }),
  } as any,
  {} as any
);
