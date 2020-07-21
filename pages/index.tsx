import Link from 'next/link'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Layout from 'components/Layout'

export default function Home() {
  return (
    <Layout type="home">
      <>
        <main>
          <Header />
          
          <Link href="/contact">
            <a>Subscribe with your email</a>
          </Link>
        </main>

        <Footer />
      </>
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
