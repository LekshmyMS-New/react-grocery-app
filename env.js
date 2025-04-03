// Load environment variables from .env file
require("dotenv").config();

const config = {
  port: process.env.PORT || 5000,           // Get PORT from .env or default to 5000
  dbName: process.env.DB_NAME || "grocerydb", // Get DB_NAME from .env or default to 'grocerydb'
  dbUser: process.env.DB_USER || "grocery_admin", // Get DB_USER from .env
  dbPass: process.env.DB_PASS || "SecureP@ssw0rd", // Get DB_PASS from .env
  dbHost: process.env.DB_HOST || "127.0.0.1", // Get DB_HOST from .env
  dbDialect: process.env.DB_DIALECT || "postgres", // Get DB_DIALECT from .env
  jwtSecret: process.env.JWT_SECRET || "SuperSecretJWTKey123!", // Get JWT_SECRET from .env
};

module.exports = config;
