import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import db from "./db/index";
import env from "./env";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  trustedOrigins: ["http://localhost:3000/", "http://localhost:3000/dashboard/", "http://localhost:3000/error/", "https://nuxt-travel-log-git-tl-16-rspothus-projects.vercel.app/", "https://nuxt-travel-log-git-tl-16-rspothus-projects.vercel.app/dashboard/", "https://nuxt-travel-log-git-tl-16-rspothus-projects.vercel.app/error/"],
  advanced: {
    database: {
      generateId: false,
    },
  },
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
    },
  },
});
