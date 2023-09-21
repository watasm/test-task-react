import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.username || !credentials.password) {
          return null;
        }
        const res = await fetch("https://service-1-lh4l.onrender.com/api/token/", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        console.log(user);
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  secret: "12345678900",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
