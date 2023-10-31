import { NextAuthOptions, getServerSession } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
const url = "https://wedding-p-0a0966944e5e.herokuapp.com/"
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            tokenId: { label: "tokenId", type: "text", placeholder: "tokenId" },
        },

        async authorize(credentials, req) { 
          console.log('credentials::', credentials,req)
                const res: any = await fetch(`${url}auth/oauth/google`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({

                        tokenId: credentials?.tokenId,
                    }),
                });
                const userGoogleLogin = await res.json();
                if (userGoogleLogin.success) {
                    return userGoogleLogin.data;
                } else {
                 //   If you return null then an error will be displayed advising the user to check their details.
                    throw new Error(userGoogleLogin.message);

                   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }

        },
    }),
],
  callbacks: {
    async session({ token, session }:any) {
        if (token) {
            session.user.employeeID = token?.user.employeeID
            session.user.name = token.user.name
            session.user.email = token.user.email
            session.user.avatar = token.user.avatar
            session.user.perm = token.user.perm
            session.user.token = token.token
        }
        session.user = token as any;
        // console.log('\n-----[777+ session 777]--------\n', '\t...', session, '\n---------[session]-----------\n')

      return session
    },

    async jwt({ token, user }) {
        return { ...token, ...user };

    },
    redirect() {
      return '/'
    },
  },
}

export const getAuthSession = () => getServerSession(authOptions)