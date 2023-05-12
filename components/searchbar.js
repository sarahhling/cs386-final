import React, { useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import styles from "../styles/Searchbar.module.css";

function Searchbar() {
  const [query, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Use the search term value for further processing
    console.log(query);
  };

  return (
    <InputGroup className="mb-3 w-50 mx-auto">
      <Form.Control placeholder="Search for news headlines here..." />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        className={styles.searchbutton}
        onClick={handleSearch}
      >
        Search
      </Button>
    </InputGroup>
  );
}

export default Searchbar;
