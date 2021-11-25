import fetch from 'node-fetch';
import { Response } from 'node-fetch';

export const handler = async (event, context) => {

  let url = new URL(event.queryStringParameters.url)
  delete event.queryStringParameters.url
  Object.entries(event.queryStringParameters).forEach(param=>url.searchParams.append(...param))


  if (!url.hostname.endsWith('.cdninstagram.com') && !url.hostname.endsWith('.fbcdn.net')) {
    return new Response('Bad upstream hostname', { status: 403 });
  }

  if (!url.pathname.endsWith('.mp4') && !url.pathname.endsWith('.jpg')) {
    return new Response('Bad file extension', { status: 403 });
  }

  let response = await fetch(url.toString());

  let data = await response.text()

  /* let { readable, writable } = new TransformStream();

  response.body.pipe(writable);

  let responseCopy = new Response(response.body, response);

  responseCopy.headers.set('cross-origin-resource-policy', 'cross-origin');

  console.log(responseCopy) */

  return { statusCode: 200, body: data.toString()};
};
