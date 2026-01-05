const fs = require("fs");
const path = require("path");

const env = (key) => (process.env[key] || "").trim() || undefined;

const config = {
  apiKey: env("FIREBASE_API_KEY"),
  authDomain: env("FIREBASE_AUTH_DOMAIN"),
  projectId: env("FIREBASE_PROJECT_ID"),
  appId: env("FIREBASE_APP_ID"),
  storageBucket: env("FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: env("FIREBASE_MESSAGING_SENDER_ID"),
  measurementId: env("FIREBASE_MEASUREMENT_ID"),
};

const requiredKeys = ["apiKey", "authDomain", "appId"];
const missing = requiredKeys.filter((key) => !config[key]);

if (missing.length) {
  console.error(
    `Missing Firebase env vars: ${missing.join(", ")}. Set them in .env (FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_APP_ID).`
  );
  process.exit(1);
}

const outputPath = path.join(__dirname, "..", "public", "auth", "firebase-config.json");
const cleaned = Object.fromEntries(Object.entries(config).filter(([, value]) => Boolean(value)));

fs.writeFileSync(outputPath, JSON.stringify(cleaned, null, 2));
console.log(`Wrote Firebase config to ${outputPath}`);
