import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <a href="www.facebook.com" target="_blank">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="www.gmail.com" target="_blank">
              <ion-icon name="logo-google"></ion-icon>
            </a>
          </li>
          <li>
            <a href="www.linkedin.com" target="_blank">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>
        <p>
          COPYRIGHT©️2024 <a href="https://github.com/LucasRZamboni">LRZ</a>
        </p>
        <ul className="dev-itens">
          <p>Developed with</p>
          <div>
            <li>
              <ion-icon name="logo-html5"></ion-icon>
            </li>
            <li>
              <ion-icon name="logo-css3"></ion-icon>
            </li>
            <li>
              <ion-icon name="logo-javascript"></ion-icon>
            </li>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
