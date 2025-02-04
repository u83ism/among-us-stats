import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// VERCELのデプロイの際にbuildコマンドが走り、その時は環境変数が定義されてない。
// nullがありうるが型定義上はnullを許容しないので、NULL合体演算子を使って空文字に変換する
const clientId = process.env.GOOGLE_CLIENT_ID ?? '';
const clientSecret = process.env.GOOGLE_CLIENT_SECRET ?? '';

console.log(`clientId: ${clientId}`);
console.log(`clientSecret: ${clientSecret}`);

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