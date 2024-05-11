import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";
import DetailModal from "./DetailsModal";

const DataList = ({ data, setData, loading,currentData }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  console.log(data);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  if (loading) {
    return (
      <h2 style={{ marginTop: "200px", color: "pink", textAlign: "center" }}>
        loading...
      </h2>
    );
  }
  return (
    <Container className="mt-4 text-light">
      <Row
        xs={1}
        sm={2}
        md={3}
        lg={4}
        className="d-flex justify-content-between"
      >
        {currentData.map(({ userId, id, title, body }) => (
          <Col className="mt-3" key={id}>
            <main
              className="border px-3 pb-3 rounded border-warning"
              style={{ width: "18rem" }}
            >
              <header className="d-flex justify-content-between gap-1 fs-3 border-bottom border-warning">
                <div className="clamp-1">{title}</div>
                <div className="text-danger" onClick={() => handleDelete(id)}>
                  <TiDeleteOutline />
                </div>
              </header>
              <div className="clamp-2 pt-2">{body}</div>
              <button
                className="btn btn-primary mt-3"
                onClick={() => {
                  setShow(true);
                  setText(body);
                  setTitle(title);
                }}
              >
                See Details
              </button>
            </main>
          </Col>
        ))}
      </Row>
      <DetailModal
        show={show}
        handleClose={() => setShow(false)}
        text={text}
        title={title}
      />
    </Container>
  );
};

export default DataList;
