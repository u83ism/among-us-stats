import React from "react";
import { useSession, signIn } from "next-auth/react";

const LoginBlock = (): React.JSX.Element => {
	const { data: session, status } = useSession();

	switch (status) {
		case "loading":
			return <div>⏳ Loading...</div>;
		case "authenticated":
			return <div>✅ あなたはログイン済みです</div>;
		case "unauthenticated":
			return (
				<div>
					<p>🔒 あなたはログインしていません</p>
					<button onClick={() => signIn("google", {}, { prompt: "login" })}>
						Googleでログイン
					</button>
				</div>
			);
		default:
			// 網羅性チェック
			// @link https://zenn.dev/qnighy/articles/462baa685c80e2
			throw new Error(`Unknown type: ${(status as { type: "__invalid__" }).type}`);

	}
}

export default LoginBlock