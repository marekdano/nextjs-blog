import Footer from 'components/Footer'
import ContactForm from 'components/ContactForm'
import Layout from 'components/Layout'

export default function Home() {
  return (
    <Layout type="contact">
      <main>
        Please subscribe to my newsletters
        <ContactForm />
      </main>
      
      <Footer />

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