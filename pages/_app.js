import "../styles/index.scss";
import "../components/scss/Navbar.scss";
import "../components/scss/Dashboard.scss";
import "../components/scss/TopNavbar.scss";
import "../components/scss/CoinDetails.scss";
import { Container } from "react-bootstrap";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Navbar from "../components/navbar/Navbar";
import CoinContextProvider from "../hooks/CoinContext";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CoinContextProvider>
        <div className="App">
          <Container fluid className="app__con">
            <div className="divcon">
              <div className="divcon__inner">
                <div className="divcon__left">
                  <Navbar />
                </div>
                <div className="divcon__rigt">
                  <Component {...pageProps} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </CoinContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
