export default function ContactForm() {
  return <form name="contact" action="/success" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <p>
      <label htmlFor="your-email">Email: </label>
      <input type="email" id="your-email" />
    </p>
    <button type="submit">Submit</button>
  </form>
}
