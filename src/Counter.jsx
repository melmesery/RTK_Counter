import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "../src/Counter.module.css";
import { minus, plus } from "./store/CounterSlice.jsx";
import { switchToggle } from "./store/ToggleSlice.jsx";

const Counter = () => {
  const { counter, toggle } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Container className={styles.counter}>
      <Row className={styles.row}>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 4, offset: 4 }}>
          <h2 className={styles.title}>Welcome to, RTK</h2>
          {toggle.replace && (
            <Fragment>
              <div className={styles.operations}>
                <div
                  className={styles.operation}
                  onClick={() => dispatch(plus(3))}
                >
                  Increase
                </div>
                <div
                  className={styles.operation}
                  onClick={() => dispatch(minus(5))}
                >
                  Decrease
                </div>
              </div>
              <h1 className={styles.result}>{counter.value}</h1>
            </Fragment>
          )}
          <button className={styles.toggle} onClick={() => dispatch(switchToggle())}>
            {toggle.replace ? "Hide Counter" : "Show Counter"}
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Counter;
