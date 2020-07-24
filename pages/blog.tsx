import React from 'react'
import Link from 'next/link'
import Layout from 'components/Layout'
import getAllPosts from 'lib/getAllPosts'

const BlogList = ({ allPosts }) => (
	<Layout type="blog">
		<main className="flex flex-1 flex-col w-full px-12 md:w-6/12">
			<h1 className="my-8">Blog</h1>

			{allPosts && allPosts.map(post => {
				return (
					<div key={post.slug} className="py-6 border-t border-gray-500">
						<h2>{post.frontmatter.title}</h2>
						<p className="my-3">{post.frontmatter.description}</p>
						<Link href={{ pathname: `/blog/${post.slug}` }}>
							<a className="hover:underline">Read </a>
						</Link>
						<span className="text-blue-600">&rarr;</span>
					</div>
				)
			})}
		</main>	
	</Layout>
)

export default BlogList

export const getStaticProps = async () => {
  const allPosts = getAllPosts()

  return {
    props: { allPosts },
  }
}