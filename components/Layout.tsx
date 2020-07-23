import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export type Props = {
	meta?: {
		title: string
	}
  children: React.ReactNode
	type: 'home' | 'blog' | 'contact' | 'success'
}

export default function Layout({ meta, children }: Props) {
  return (
		<>
			<Head>
				<meta name="twitter:site" content="@marekdano" />
				<title>{meta?.title ?? 'My nextjs blog'}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="wrapper">
				<Navbar />

				{children}
			
				<Footer />

				<style jsx>{`
					.wrapper {
						height: 100vh;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
				`}</style>

				<style jsx global>{`
					html,
					body {
						padding: 0;
						margin: 0;
						font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
							Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
							sans-serif;
					}
					* {
						box-sizing: border-box;
					}
				`}</style>
			</div>
		</>
	)
}
