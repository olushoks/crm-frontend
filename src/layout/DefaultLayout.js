import { Header } from "./partials/Header.component";
import { Footer } from "./partials/Footer.component";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout mb-2">
      <header className="header">
        <Header />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
