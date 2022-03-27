import AppProvider from "../contexts/appContext";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 mx-auto md:gap-16 font-primary w-90w">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default MyApp;
