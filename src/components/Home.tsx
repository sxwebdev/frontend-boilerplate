import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Fronted boilerplate</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link className="btn btn-primary btn-lg px-4 gap-3" to="/page">
            Page
          </Link>
          <Link className="btn btn-outline-secondary btn-lg px-4" to="/404">
            Not found
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
