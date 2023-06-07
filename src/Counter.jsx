import React from "react";
import styles from "../src/Counter.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <Container className={styles.counter}>
      <Row className={styles.row}>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 4, offset: 4 }}>
          <h2 className={styles.title}>Welcome to, RTK</h2>
          <div className={styles.operations}>
            <div className={styles.operation}>Increase</div>
            <div className={styles.operation}>Decrease</div>
          </div>
          <h1 className={styles.result}>{count}</h1>
          <button className={styles.toggle}>Hide</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Counter;
