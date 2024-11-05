import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
      {/* <img src="IMG/Logo1.png" alt="logo" /> */}
        <div className="logo"></div>
        <ul id="nav-menu">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li className="li-receitas">
            <a href="#receitas" className="dropdown-link">
              Receitas <ion-icon name="chevron-down-outline"></ion-icon>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#doces">Doces</a>
              </li>
              <li>
                <a href="#salgado" className="dropdown-link">Salgado</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#carnes">Carnes</a>
                  </li>
                  <li>
                    <a href="#massas">Massas</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#sobre">Sobre nós</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
        <div className="search">
          <button type="button">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <input
            type="search"
            name="search"
            id="pesquisa"
            placeholder="Pesquise aqui..."
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
