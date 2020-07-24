import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), 'pages/blog')

const getAllPosts = () => {
	const mdxFiles = fs.readdirSync(postsDirectory)
	const slugs = mdxFiles
		.map(filename => filename.replace(/\.mdx$/, ''))
	const posts = slugs
		.map(slug => {
			const fullPath = join(postsDirectory, `${slug}.mdx`)
			const fileContent = fs.readFileSync(fullPath).toString().replace(/[\n\r\t]/g, '');
			const metadataStr = fileContent
				.substring(fileContent.indexOf('metadata = {'), fileContent.indexOf('}') + 1)
				.replace(/metadata = /, '')
			const metadata = JSON.parse(metadataStr)
		
			return {
				frontmatter: metadata,
				slug
			}
		})
    
	return posts
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export default getAllPosts