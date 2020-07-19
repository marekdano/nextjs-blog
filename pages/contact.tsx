import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import ContactForm from 'src/components/ContactForm'
import Layout from 'src/components/Layout'

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