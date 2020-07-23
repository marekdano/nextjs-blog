import React from 'react'
import Layout from 'components/Layout'

export default function Post({ meta, children}) {
	return (
		<Layout meta={meta} type="blog" >
			<main className="flex flex-1 flex-col">
				{children}
			</main>
		</Layout>
	)
}
