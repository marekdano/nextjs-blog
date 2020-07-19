import Head from 'next/head'
import Link from 'next/link'
import Layout from 'src/components/Layout'

export default function Success() {
  return (
    <Layout type='success'>
      <Head>
        <title>Form submitted!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Hooray your form was submitted!
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </Layout>
  )
}
