import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

// ⚠️ VERCELの管理画面から環境変数を設定しておかないと、デプロイの際のビルドで落ちるので注意
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
	// コールバックの設定
	callbacks: {
		async redirect({ url, baseUrl }) {
			// ログイン成功時
			if (url === '/api/auth/callback/google') {
				return '/home';
			}
			// ログアウト成功時
			if (url === '/api/auth/signout') {
				return '/login';
			}
			// 認証エラー時
			if (url === '/api/auth/error') {
				return '/login';
			}
			return baseUrl;
		},
	},
})

export { handler as GET, handler as POST }