import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useEffect } from "react";

function Statistics() {
  let [month, setMonth] = useState("01");
  let [totalSales, setTotalSales] = useState(0);
  let [totalSold, setTotalSold] = useState(0);
  let [totalNotSold, setTotalNotSold] = useState(0);

  let sales = 0;
  let sold = 0;
  let notSold = 0;

  let filterProducts = async (month) => {
    try {
      const res = await axios.get(
        `https://roxiler-backend-kewh.onrender.com/users/allProducts`
      );

      console.log(res);

      let filterProductDetails = res.data.allProducts.filter(
        (e) =>
          new Date(e.dateOfSale).toLocaleDateString("en-UK").slice(3, 5) ==
          month
      );

      filterProductDetails.filter((e) => {
        if (e.sold) {
          sales += e.price;
          sold++;
        }
        setTotalSales(sales);
        setTotalSold(sold);
      });

      filterProductDetails.filter((e) => {
        if (e.sold === false) {
          notSold++;
        }

        setTotalNotSold(notSold);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    filterProducts(month);
  }, [month]);

  return (
    <>
      <div className="">
        <div
          className="text-white your-orders-title text-center"
          style={{ height: "3em", backgroundColor: "darkGreen" }}
        >
          <h2>Statistics</h2>
        </div>
        <div className="p-4 mt-6 statistics-main">
          <div>
            <Form className="search-bar">
              <Row>
                <Col>
                  <Form.Select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option className="text-muted">
                      Select month - example March
                    </option>
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
                <Col></Col>
              </Row>
            </Form>
            <div className="statistics">
              <div>
                <span>Total Sale={totalSales}</span>
                <br />
                <span>Total Sold item={totalSold}</span>
                <br />
                <span>Total Not Sold item={totalNotSold}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
