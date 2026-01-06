export default function handler(request, response) {
  // Shopware sends a POST request to confirm installation
  // This indicates the shop has successfully saved the app secret

  if (request.method === 'POST') {
    // In a production app, you would verify the request signature here
    // using the 'shopware-app-signature' header and your app secret.
    // For this static integration, simply acknowledging is sufficient.

    console.log('App installation confirmed by Shopware');

    return response.status(200).send('Confirmed');
  }

  return response.status(405).json({ error: 'Method not allowed' });
}
