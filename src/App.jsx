import "./style/App.scss";

export const App = () => {
  return (
    <>
      <header className="container">
        <div className="header">
          <a className="header__logo" href="#">
            YOUR LOGO
          </a>
          <nav className="header__nav">
            <a className="header__nav-link" href="#">
              HOME
            </a>
            <a className="header__nav-link" href="#">
              SHOP
            </a>
            <a className="header__nav-link" href="#">
              LOOKBOOK
            </a>
            <a className="header__nav-link" href="#">
              FEATURES
            </a>
            <a className="header__nav-link" href="#">
              PAGES
            </a>
            <a className="header__nav-link" href="#">
              BLOG
            </a>
          </nav>
          <div className="header__option">
            <a className="header__option-api" href="#">
              GLASS
            </a>
            <a className="header__option-api" href="#">
              HEART
            </a>
            <a className="header__option-api" href="#">
              CART
            </a>
          </div>
        </div>
      </header>
      <div className="container">
        <section className="fon">
        </section>
      </div>
    </>
  );
};

export default App;
