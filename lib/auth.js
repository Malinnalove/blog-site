// lib/auth.js
import GitHub from "next-auth/providers/github";

export const authOptions = {
  providers: [GitHub({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET })],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  callbacks: {
    async signIn({ user }) {
      const allow = (process.env.ADMIN_EMAILS || "")
        .split(",").map(s=>s.trim().toLowerCase()).filter(Boolean);
      const email = (user?.email || "").toLowerCase();
      return allow.includes(email);
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
