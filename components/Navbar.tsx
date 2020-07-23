import React from 'react'
import Link from 'next/link'

const Navbar = () => (
	<nav className="flex items-center justify-between bg-orange-700 p-5 w-full">
		<Link href="/">
			<a className="font-semibold text-xl tracking-tight text-white mr-6">Home</a>
		</Link>
		<div className="w-full flex-grow flex">
			<div className="text-sm flex-grow">
				<Link href="/blog">
					<a className="mt-4 text-orange-300 hover:text-white mr-4">
						Blog
					</a>
				</Link>
				<Link href="/contact">
					<a className="mt-4 text-orange-300 hover:text-white mr-4">
						Subscribe
					</a>
				</Link>
			</div>
		</div>
	</nav>
)

export default Navbar