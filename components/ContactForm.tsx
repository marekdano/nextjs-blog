export default function ContactForm() {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" name="contact" action="/success" method="POST" data-netlify="true">
      {/* <input type="hidden" name="form-name" value="contact" /> */}
      <div className="mb-4">
        <label 
          className="block text-gray-700 text-sm font-bold mb-2" 
          htmlFor="your-email"
        >
          Email
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="email" 
          id="your-email" 
          placeholder="Email"
        />
      </div>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}
