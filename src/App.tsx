import * as React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
// import AuthenticationForm from "./components/auth/authentication";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      {/* <AuthenticationForm/> */}
      <Header />
      <Container />
      <Footer />
    </>
  );
};

export default App;
