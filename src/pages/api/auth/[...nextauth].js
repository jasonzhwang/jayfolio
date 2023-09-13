import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other authentication providers if needed
  ],

  callbacks: {
    async signIn(user, account, profile) {
      return true; // Allow sign-in to proceed
    },
    async redirect(url, baseUrl) {
      return baseUrl; // Redirect to the home page after sign-in
    },
    async session(session, user) {
      session.user = user;
      return session;
    },
    async jwt(token, user) {
      if (user) {
        token.id = user.id; // You can add more user data to the token if needed
      }
      return token;
    },
  },

  pages: {
    signIn: "/auth/signin", // Customize the sign-in page URL
  },

  // Add other NextAuth.js configuration options as needed

  // Add custom error handling
  callbacks: {
    async onError(error, _, __) {
      console.error("NextAuth Error:", error.message);
      throw error;
    },
  },
});
