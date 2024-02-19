import { handler } from '../src/services/spaces/handler';

process.env.AWS_REGION = 'eu-west-2';
process.env.TABLE_NAME = 'SpaceStack-0206bbe135bd';

handler(
  {
    httpMethod: 'POST',
    body: JSON.stringify({
      location: 'San Francisco updated',
    }),
  } as any,
  {} as any
).then((result) => {
  console.log(result);
});
