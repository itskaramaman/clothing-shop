import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import connectDB from "@/utils/db";
import User from "@/models/User";
import { Session } from "next-auth";

interface ISignInParams {
  user: {
    email: string;
    name?: string;
    image?: string;
  };
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }: ISignInParams) {
      await connectDB();
      const userDB = await User.findOne({ email: user.email });
      if (!userDB) {
        await User.create({
          email: user.email,
          authType: "OAuth",
          name: user.name,
          img: user.image,
          admin: false,
        });
      }
      return true;
    },

    async session({ session }: { session: Session }) {
      await connectDB();
      const user = await User.findOne({ email: session.user.email });
      if (user) {
        session.user.isAdmin = user?.isAdmin;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
