import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_ENV = process.env.PAYPAL_ENV || 'sandbox';
const PAYPAL_BASE = PAYPAL_ENV === 'live' ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com';

if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
  console.warn('PayPal credentials not set. Set PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET in server .env');
}

async function getAccessToken() {
  const tokenRes = await fetch(`${PAYPAL_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });
  const json = await tokenRes.json();
  return json.access_token;
}

app.post('/api/verify-order', async (req, res) => {
  try {
    const { orderID, expectedAmount } = req.body;
    if (!orderID) return res.status(400).json({ ok: false, message: 'orderID required' });

    const token = await getAccessToken();
    const r = await fetch(`${PAYPAL_BASE}/v2/checkout/orders/${orderID}`, {
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    });
    const order = await r.json();

    const status = order.status;
    const purchaseUnit = order.purchase_units && order.purchase_units[0];
    const amount = purchaseUnit?.amount?.value;

    if (status === 'COMPLETED' && (!expectedAmount || Number(amount) === Number(expectedAmount))) {
      // In production: persist order to DB here.
      return res.json({ ok: true, order });
    } else {
      return res.status(400).json({ ok: false, status, amount, order });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`PayPal verification server listening on ${port}`));
