import React from "react";
import { useSession, signIn } from "next-auth/react";

const LoginBlock = (): React.JSX.Element => {
	const { status } = useSession();

	switch (status) {
		case "loading":
			return <div>⏳ Loading...</div>;
		case "authenticated":
			throw new Error('ログイン済みなのにログインブロックを表示しようとしています')
		case "unauthenticated":
			return (
				<div>
					<div>🔒 あなたはログインしていません</div>
					<div>
						<button
							className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
							onClick={() => signIn("google", {}, { prompt: "login" })}
						>
							ログインボタン
						</button>
					</div>
				</div>
			);
		default:
			// 網羅性チェック
			// @link https://zenn.dev/qnighy/articles/462baa685c80e2
			throw new Error(`Unknown type: ${(status as { type: "__invalid__" }).type}`);

	}
}

export default LoginBlock