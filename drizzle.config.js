import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./utils/schema.tsx",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://Accounts:dJsqeL3Wu1pz@ep-rapid-dust-a5dccaa4.us-east-2.aws.neon.tech/ReMo?sslmode=require'
  }
});