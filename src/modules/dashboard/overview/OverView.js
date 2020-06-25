import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

export default function OverView() {
  return (
    <section className="grid-container">
      <Nav />
      <Sidebar />
      <div className="content">
        <div className="navbar-responsive">
          <label id="non-display" for="toggle-main">
            <i className="fas fa-bars"></i>
          </label>
          <input type="checkbox" id="toggle-main" />
          <nav className="main__navigation">
            <a className="nav__link active" href="#overview">
              Overview
            </a>
            <a className="nav__link" href="#products">
              Products
            </a>
            <a className="nav__link" href="#shipping">
              Shipping
            </a>
            <a className="nav__link" href="#payment">
              Payment
            </a>
          </nav>
        </div>
        <main className="main p-layout">CONTENT</main>
      </div>
    </section>
  );
}
