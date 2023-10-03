import { useEffect, useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { filterItems } from "../redux/productReducer";
import axios from "axios";
import { url } from "../App";

function Filter() {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [month, setMonth] = useState("03");

  //function for filter
  let filterProducts = async (searchKey, month) => {
    let filteredProducts;
    let filteredMonth;
    try {
      const res = await axios.get(
        `https://roxiler-backend-kewh.onrender.com/users/allProducts`
      );

      if (month === "All") {
        dispatch(filterItems(res.data.allProducts));
      }

      if (searchKey !== "" && month === "All") {
        filteredProducts = res.data.allProducts.filter((e) =>
          e.title.toLowerCase().includes(searchKey)
        );
        dispatch(filterItems(filteredProducts));
      } else if (searchKey === "" && month !== "All") {
        filteredMonth = res.data.allProducts.filter(
          (e) =>
            new Date(e.dateOfSale).toLocaleDateString("en-UK").slice(3, 5) ==
            month
        );

        dispatch(filterItems(filteredMonth));
      } else if (searchKey !== "" && month !== "All") {
        filteredProducts = res.data.products.filter((e) =>
          e.name.toLowerCase().includes(searchKey)
        );
        dispatch(filterItems(filteredProducts));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    filterProducts(searchKey, month);
  }, [searchKey, month]);

  return (
    <div className="p-4 mt-6 ">
      <Form>
        <Row>
          <Col>
            <Form.Control
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="search title"
            />
          </Col>
          <Col>
            <Form.Select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option className="text-muted">Select month - March</option>
              <option>All</option>
              <option value={`01`}>January</option>
              <option value={`02`}>February</option>
              <option value={`03`}>March</option>
              <option value={`04`}>April</option>
              <option value={`05`}>May</option>
              <option value={`06`}>June</option>
              <option value={`07`}>July</option>
              <option value={`08`}>August</option>
              <option value={`09`}>September</option>
              <option value={10}>October</option>
              <option value={11}>November</option>
              <option value={12}>December</option>
            </Form.Select>
          </Col>
          <Col>
            {/* <Button onClick={() => filterProducts(searchKey, month)}>
              Search
            </Button> */}
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Filter;
