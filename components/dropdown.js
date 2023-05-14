import React, { useState, useEffect } from "react";
import { Form, Accordion } from "react-bootstrap";
import styles from "../styles/dropdown.module.css";

export default function CustomDropdown() {
  const [field, setField] = useState([]);

  useEffect(() => {
    console.log(field);
  }, [field]);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setField((prevField) => [...prevField, id]);
    } else {
      setField((prevField) => prevField.filter((item) => item !== id));
    }
  };

  return (
    <>
      <Accordion className={` mx-auto pt-5 ${styles.custom_dropdown}`}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="fw-bold">Filter Results</span>
          </Accordion.Header>
          <Accordion.Body>
            <Form>
              <p className="fw-bold">Factual Reporting Rating</p>
              <Form.Check // prettier-ignore
                type="checkbox"
                id="very_high"
                label="Very High"
                onChange={handleCheckboxChange}
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                id="high"
                label="High"
                onChange={handleCheckboxChange}
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                id="mostly_factual"
                label="Mostly Factual"
                onChange={handleCheckboxChange}
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                id="mixed"
                label="Mixed"
                onChange={handleCheckboxChange}
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                id="low"
                label="Low"
                onChange={handleCheckboxChange}
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                id="very_low"
                label="Very Low"
                onChange={handleCheckboxChange}
              />
              <hr />
              <p className="fw-bold">Bias Rating</p>

              <Form.Check // prettier-ignore
                type="checkbox"
                id="extreme_left"
                label="Extreme Left"
                onChange={handleCheckboxChange}
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                id="left"
                label="Left"
                onChange={handleCheckboxChange}
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                id="left_center"
                label="Left-Center"
                onChange={handleCheckboxChange}
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                id="least_biased"
                label="Least Biased"
                onChange={handleCheckboxChange}
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                id="right_center"
                label="Right Center"
                onChange={handleCheckboxChange}
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                id="right"
                label="Right"
                onChange={handleCheckboxChange}
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                id="extreme_right"
                label="Extreme Right"
                onChange={handleCheckboxChange}
              />
              <hr />
              <p className="fw-bold">Other</p>

              <Form.Check // prettier-ignore
                type="checkbox"
                id="satire"
                label="Satire"
                onChange={handleCheckboxChange}
              />
              <Form.Check // prettier-ignore
                type="checkbox"
                id="conspiracy"
                label="Pseudoscience/Conspiracy"
                onChange={handleCheckboxChange}
              />
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
