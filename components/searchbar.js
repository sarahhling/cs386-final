import React from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import styles from "../styles/Searchbar.module.css";

function Searchbar() {
  return (
    <InputGroup className="mb-3 w-50 mx-auto">
      <Form.Control placeholder="Search for news headlines here..." />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        className={styles.searchbutton}
      >
        Button
      </Button>
    </InputGroup>
  );
}

export default Searchbar;
