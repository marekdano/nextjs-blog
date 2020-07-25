import ContactForm from 'components/ContactForm'
import Layout from 'components/Layout'

export default function Home() {
  return (
    <Layout type="contact">
      <main>
        <h5 className="text-xs italic mb-2">Please subscribe to my newsletters</h5>
        <ContactForm />
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