import React from 'react'
import Link from 'next/link'
import Layout from './Layout'
 
export default function Post({ meta, children }) {
	return (
		<Layout meta={meta} type="blog" >
			<main className="flex flex-1 flex-col">
				{children}
				<Link href="/blog">
					<a className="mt-16 hover:underline">&larr; Back to blog</a>
				</Link>
			</main>			
		</Layout>
	)
}
