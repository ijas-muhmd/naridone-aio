import crypto from 'crypto';

export default function handler(request, response) {
  // 1. Extract Shopware parameters
  const query = request.query;
  const shopUrl = query['shop-url'];
  const shopId = query['shop-id'];

  // 2. Validate parameters
  if (!shopUrl || !shopId) {
    return response.status(400).json({ error: 'Missing shop parameters' });
  }

  // 3. Configuration (Must match manifest.xml)
  const appName = 'NaridonAIO';
  const appSecret = 'naridon_secret_123'; // Hardcoded for simplicity/local testing

  // 4. Generate Proof
  // Proof = HMAC_SHA256(shop-id + shop-url + app-name, app-secret)
  const proofString = shopId + shopUrl + appName;
  const proof = crypto.createHmac('sha256', appSecret).update(proofString).digest('hex');

  // 5. Construct Response
  const body = {
    proof: proof,
    secret: appSecret,
    confirmation_url: `https://${request.headers.host}/api/confirm`
  };

  // 6. Send Response
  return response.status(200).json(body);
}
