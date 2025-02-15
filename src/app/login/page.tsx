'use client';

import Image from "next/image";
import { useSession } from "next-auth/react";
import LoginBlock from "@/app/api/auth/components/LoginBlock";
import LogoutBlock from '@/app/api/auth/components/LogoutBlock';

export default function Login() {
	const { data: session, status } = useSession();

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div>
					{status === 'authenticated' ? (
						<div>
							<p>セッションの期限：{session.expires}</p>
							<p>ようこそ、{session.user?.name}さん</p>
							<img
								src={session.user?.image ?? ``}
								alt=""
								style={{ borderRadius: '50px' }}
							/>
							<div>
								<LogoutBlock />
							</div>
						</div>
					) : (
						<LoginBlock />
					)}
				</div>
			</main >
		</div >
	);
}
