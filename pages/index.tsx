import Header from 'components/Header'
import Layout from 'components/Layout'

export default function Home() {
  return (
    <Layout type="home">
      <main>
        <Header />
        <h5>This is a simple next.js app ;)</h5>
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
