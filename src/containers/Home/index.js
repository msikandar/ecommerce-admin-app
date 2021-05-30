import React from "react";
import Layout from "../../components/Layout/index";
import { Jumbotron } from "react-bootstrap";
function Home(props) {
  return (
    <div>
      <Layout>
        <Jumbotron
          style={{ margin: "5rem", background: "#fff" }}
          className="text-center"
        >
          <h1>Welcome to Admin Dashboard</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
        </Jumbotron>
      </Layout>
    </div>
  );
}

export default Home;
