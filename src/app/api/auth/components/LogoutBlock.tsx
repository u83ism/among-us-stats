import React from 'react';
import { useSession, signOut } from 'next-auth/react';

const LogoutBlock = (): React.JSX.Element => {
	const { status } = useSession();

	switch (status) {
		case 'loading':
			return <div>⏳ Loading...</div>;
		case 'authenticated':
			return <div>
				<button onClick={() => signOut()}>ログアウト</button>
			</div>;
		case 'unauthenticated':
			return <div>🔒 あなたはログインしていません</div>;
		default:
			// 網羅性チェック
			// @link https://zenn.dev/qnighy/articles/462baa685c80e2
			throw new Error(`Unknown type: ${(status as { type: "__invalid__" }).type}`);
	}
}

export default LogoutBlock;

