import React from 'react'
import Head from 'next/head'

export type Props = {
  children: React.ReactNode
	type: 'home' | 'post' | 'about' | 'contact' | 'success'
}

export default function Layout({ children }: Props) {
  return (
		<div className="container">
			<Head>
				<meta name="twitter:site" content="@chibicode" />
				<title>My nextjs blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{children}

			<style jsx>{`
				.container {
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
  )
}
