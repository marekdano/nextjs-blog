function Footer() {
  return (
    <>
      <footer className="text-xs">
        Made with
        <span className="px-1 font-semibold">Next.js</span> 
        and
        <span className="px-1 font-semibold">Tailwindcss</span>
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logo {
          height: 1em;
          margin: 5px;
        }
      `}</style>
    </>
  )
}

export default Footer
