'use client';

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import React from 'react';


const Header = (): React.JSX.Element => {
	const handleLogout = () => {
		// ログアウト処理をここに追加
		console.log('Logged out');
	};

	return (
		<header className="flex justify-between items-center p-4 bg-gray-800 text-white">
			<div className="text-lg font-bold">My App</div>
			<nav>
				<ul className="flex space-x-4">
					<li><Link href="/home" className="hover:underline	">Home</Link></li>
					<li><Link href="/profile" className="hover:underline">Profile</Link></li>
					<li><Link href="/settings" className="hover:underline">Settings</Link></li>
				</ul>
			</nav>
			<Button onClick={handleLogout}>
				Logout
			</Button>
		</header>
	);
};

export default Header;