import Footer from "../components/Footer";
import Header from "../components/Header";
import AttemptsList from "../components/AttemptsList";
import "bootstrap/dist/css/bootstrap.min.css";

const History = ({attempts}) => {
  return (
    <>
        <Header />
        <AttemptsList attempts={attempts} /> 
      <Footer />
    </>
  );
};

export default History;
