import { MDXProvider } from '@mdx-js/react';
import '../styles/index.css'

const mdxComponents = {
  pre: ({ className, ...props }) => (
    <pre className={`${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`} {...props} />
  ),
  'pre.code': ({ className, ...props }) => (
    <code className={`${className} text-gray-200`} {...props} />
	),
	h1: ({ className, ...props }) => (
		<h1 className={`${className} text-red-700`} {...props} />
	)
}

export default function App({ Component, pageProps }) {
  return (
		<MDXProvider components={mdxComponents}>
			<Component {...pageProps} />
		</MDXProvider>
	)
}
