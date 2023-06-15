import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from 'axios';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account}) {
      // providerとproviderAccountIdを使ってユーザーを検索、なければ作成
      if (account) {
        await axios.post('http://localhost/api/user',
          {
            provider: account.provider,
            providerAccountId: account.providerAccountId,
          },
          {
            headers: {
              Authorization: process.env.LARAVEL_API_KEY,
            },
          },
        ).then((response) => {
          token.sub = response.data.uuid;
        }).catch((error) => {
          console.log('Error in axios post', error);
          throw new Error('Unable to find or create user');
        });
      }

      return token;
    },
    async session({ session, user, token }) {
      session.sub = token.sub;
      return session;
    },
  },
};

export default NextAuth(authOptions);
