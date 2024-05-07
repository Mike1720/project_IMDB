import "./footer.css"

export const Footer = () => {
  return (

    // <footer className="footer">
    //   <div className="footer-content">
    //     <div className="footer-contact">
    //       <p>Contacto: MikeMV1720@hotmail.com</p>
    //       <p>Mis redes:  <a href="https://www.instagram.com/mike17.js/">Instagram</a>, <a href="https://github.com/Mike1720">Github</a></p>
    //     </div>
    //   </div>
    // </footer>

    <footer className="container-fluid bg-dark">
      <div className="footer-content">
        <p className="align-self-center">Contacto: MikeMV1720@hotmail.com</p>
        <p className="d-flex justify-content-center align-items-center column-gap-2">
          Mis redes:
          <a href="https://www.instagram.com/mike17.js/">
            <img className="px-2" src="../../src/assets/instagram-logo.svg" style={{ height: 40 }} />Instagram
          </a>
          <a href="https://github.com/Mike1720">
            <img className="px-2" src="../../src/assets/github-logo.svg" alt="logo-github" style={{ height: 40 }} />Github
          </a>
        </p>
      </div>
    </footer>
  );
}
