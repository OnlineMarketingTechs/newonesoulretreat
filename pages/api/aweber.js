import ClientOAuth2 from "client-oauth2";
import fs from "fs/promises";
import path from "path";

const OAUTH_URL = "https://auth.aweber.com/oauth2";
const TOKEN_URL = "https://auth.aweber.com/oauth2/token";
const scopes = [
  "account.read",
  "list.read",
  "list.write",
  "subscriber.read",
  "subscriber.write",
  "email.read",
  "email.write",
  "subscriber.read-extended",   

  "landing-page.read",   

];

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { createRefresh } = req.body;

    let aweberAuth;
    let user;
    let credentialsFile = path.join(process.cwd(), "credentials.json");

    if (createRefresh.toUpperCase() === "C") {
      // Create new tokens (should be a one-time setup)
      const { clientId, clientSecret } = req.body;

      aweberAuth = new ClientOAuth2({
        clientId,
        clientSecret,
        accessTokenUri: TOKEN_URL,
        authorizationUri: `${OAUTH_URL}/authorize`,
        redirectUri:   
 process.env.NEXT_PUBLIC_AWEBER_REDIRECT_URI, // Set in environment variables
        scopes,
      });

      // Handle the authorization flow and token retrieval on the client-side (Next.js frontend)
      res.status(200).json({ authorizationUrl: aweberAuth.code.getUri({ state: Date.now() }) });
    } else if (createRefresh.toUpperCase() === "R") {
      // Refresh existing tokens
      try {
        const credentials = await fs.readFile(credentialsFile, "utf-8");
        aweberAuth = new ClientOAuth2(JSON.parse(credentials));
        user = await aweberAuth.createToken(
          aweberAuth.accessToken,
          aweberAuth.refreshToken,
          "bearer"
        ).refresh();

        await fs.writeFile(credentialsFile, JSON.stringify(user));
        res.status(200).json({ message: "Tokens refreshed successfully!" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error refreshing tokens" });
      }
    } else {
      res.status(400).json({ message: "Invalid entry: 'c' or 'r' required" });
    }
  } else {
    res.status(405)}
}