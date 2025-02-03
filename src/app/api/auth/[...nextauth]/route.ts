import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

console.log(clientId, clientSecret)

if (!clientId || !clientSecret) {
	throw new Error("Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET environment variables");
}

const handler = NextAuth({
	// Google
	providers: [
		GoogleProvider({
			clientId: clientId,
			clientSecret: clientSecret
		})
	],
})

export { handler as GET, handler as POST }