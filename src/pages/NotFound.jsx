import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import cow from '../styles/cow.gif';
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Header/>
      <div className="container d-flex flex-column justify-content-center align-items-center ">
        <img src={cow} alt="Not Found" className="img-fluid mb-3" />
        <h2 className="mb-3">404 Page Not Found</h2>
        <Link to="/" className="btn btn-primary">Back to Game page!</Link>
      </div>
      <Footer/>
    </>
  );
};

export default NotFound;
