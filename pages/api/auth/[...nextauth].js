import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from '../../../lib/connectDb';


export default NextAuth({

    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                const { username, password } = credentials;
            
                console.log(username,password);

                // const db = await connectDb();
                // const user = await db.collection('users').find({ email: email, password: password }).toArray();

                // if (user.length > 0) {
                //     const loggedUser = user[0];

                //     return { "id: loggedUser._id, email: loggedUser.email, name: loggedUser.username":true }
                // } else {

                //     throw new Error('invailed credentials')

                // }





            },

            session: {
                strategy: "jwt",
            },




        })
    ],
    secret: process.env.NEXT_PUBLIC_SECRET,

    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            //this comes first and has a explicit user object which was returned from authorize function on above.
            //and whatever is return as a token can be recived in the session below on the token. 
            // TAKEAWAY : 1. ON AUTHORIZE FUNC WE CAN PUSH ANY KEY:VALUE AND RECIVE HERE AS A USER OBJECT AND 
            //MANIPULATE THE TOKEN WITH THE USER VALUE AND SEND TO THE THE SESSION FUNC BELOW AND SESSION FUNC WILL RECIVE IT AS A TOKEN
            //WITH INFORMATION FROM THE TOKEN OBJ IN THE SESSION WE CAN MANIPULATE SESSION.USER AND SEND THE INFO TO THE USER.
         
            return token
        },

        //session has no user. user object is a part of session example = session.user <- this is what gets returns to the user
        async session({ session, token }) {
    
            return session
        }

    },





    pages: {
        signIn: '../../admin/index.js'
    }



})