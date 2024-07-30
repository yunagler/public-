const { google } = require('googleapis');
const { OAuth2 } = google.auth;

const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const redirectUri = 'YOUR_REDIRECT_URI';
const refreshToken = 'YOUR_REFRESH_TOKEN';

const oauth2Client = new OAuth2(clientId, clientSecret, redirectUri);
oauth2Client.setCredentials({ refresh_token: refreshToken });

const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

async function getSheetData(spreadsheetId, range) {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });
  return response.data.values;
}

module.exports = getSheetData;
