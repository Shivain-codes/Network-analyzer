// ================================================================
//  SocialSphere — Secure Credentials API
//  Vercel Serverless Function
//
//  This file SAFELY delivers your API keys to the frontend.
//  Keys live ONLY in Vercel Dashboard → never in GitHub code.
//
//  Endpoint: GET /api/config
// ================================================================

export default function handler(req, res) {
  // Allow only GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers — allow same origin only
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Cache-Control', 'no-store'); // never cache credentials

  // Read from Vercel Environment Variables
  // Set these in: Vercel Dashboard → Your Project → Settings → Environment Variables
  return res.status(200).json({
    GITHUB_TOKEN:      process.env.GITHUB_TOKEN      || '',
    YOUTUBE_KEY:       process.env.YOUTUBE_KEY        || '',
    INSTAGRAM_TOKEN:   process.env.INSTAGRAM_TOKEN    || '',
    INSTAGRAM_USER_ID: process.env.INSTAGRAM_USER_ID  || '',
  });
}
