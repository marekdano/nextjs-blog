import { MDXProvider } from '@mdx-js/react';
import '../styles/index.css'
import '../styles/prism.css'

const mdxComponents = {
	h1: props => (
		<h1 className="my-10 text-red-700" {...props} />
	),
	p: props => (
		<p className="mb-4" {...props} />
	)
}

export default function App({ Component, pageProps }) {
  return (
		<MDXProvider components={mdxComponents}>
			<Component {...pageProps} />
		</MDXProvider>
	)
}
