// lib/auth.js
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

export const authOptions = {
  providers: [
    Credentials({
      name: "Password",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(creds) {
        const u = process.env.ADMIN_USERNAME;
        const hash = process.env.ADMIN_PASSWORD_HASH;
        if (!creds?.username || !creds?.password || !u || !hash) return null;
        if (creds.username !== u) return null;
        const ok = await compare(creds.password, hash);
        if (!ok) return null;
        return { id: "admin", name: "Admin", email: `${u}@local` }; // 登录成功
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};
