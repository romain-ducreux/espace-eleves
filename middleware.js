import auth from 'basic-auth';

export function middleware(req) {
  const credentials = auth(req);

  const username = process.env.BASIC_AUTH_USERNAME;
  const password = process.env.BASIC_AUTH_PASSWORD;

  if (!credentials || credentials.name !== username || credentials.pass !== password) {
    return new Response('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Protected Area"',
      },
    });
  }

  // Si l'utilisateur est authentifié, continuez la requête
  return fetch(req);
}
