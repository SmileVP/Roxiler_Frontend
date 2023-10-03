import React, { useState, useEffect } from "react";
import { MDBContainer } from "mdbreact";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function BarChartGraph() {
  let [month, setMonth] = useState("01");
  let [data1, setData1] = useState(0);
  let [data2, setData2] = useState(0);
  let [data3, setData3] = useState(0);
  let [data4, setData4] = useState(0);
  let [data5, setData5] = useState(0);
  let [data6, setData6] = useState(0);
  let [data7, setData7] = useState(0);
  let [data8, setData8] = useState(0);
  let [data9, setData9] = useState(0);
  let [data10, setData10] = useState(0);

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

      console.log(filterProductDetails);

      let one = 0;
      let two = 0;
      let three = 0;
      let four = 0;
      let five = 0;
      let six = 0;
      let seven = 0;
      let eight = 0;
      let nine = 0;
      let ten = 0;

      filterProductDetails.map((e) => {
        let productPrice = Math.floor(e.price);

        console.log(productPrice);

        if (productPrice >= 0 && productPrice <= 100) {
          one++;
          // setData1(data1++);
        } else if (productPrice >= 101 && productPrice <= 200) {
          // setData2(data2++);
          two++;
        } else if (productPrice >= 201 && productPrice <= 300) {
          // setData3(data3 + 1);
          three++;
        } else if (productPrice >= 301 && productPrice <= 400) {
          //setData4(data4 + 1);
          four++;
        } else if (productPrice >= 401 && productPrice <= 500) {
          //setData5(data5 + 1);
          five++;
        } else if (productPrice >= 501 && productPrice <= 600) {
          //setData6(data6 + 1);
          six++;
        } else if (productPrice >= 601 && productPrice <= 700) {
          //setData7(data7 + 1);
          seven++;
        } else if (productPrice >= 701 && productPrice <= 800) {
          //setData8(data8 + 1);
          eight++;
        } else if (productPrice >= 801 && productPrice <= 900) {
          //setData9(data9 + 1);
          nine++;
        } else if (productPrice >= 901) {
          //setData10(data10 + 1);
          ten++;
        }
      });

      setData1(one);
      setData2(two);
      setData3(three);
      setData4(four);
      setData5(five);
      setData6(six);
      setData7(seven);
      setData8(eight);
      setData9(nine);
      setData10(ten);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    filterProducts(month);
  }, [month]);

  let dataValues = {
    labels: [
      "0-100",
      "101-200",
      "201-300",
      "301-400",
      "401-500",
      "501-600",
      "601-700",
      "701-800",
      "801-900",
      "901-above",
    ],
    datasets: [
      {
        label: "Transactions Bar Chart",
        data: [
          data1,
          data2,
          data3,
          data4,
          data5,
          data6,
          data7,
          data8,
          data9,
          data10,
        ],
        backgroundColor: "orange",
        borderWidth: 1,
        borderColor: "#000000",
      },
    ],
  };

  return (
    <div>
      <div
        className="text-white your-orders-title text-center"
        style={{ height: "3em", backgroundColor: "darkGreen" }}
      >
        <h2>Bar chart</h2>
      </div>
      <div>
        <Form className="search-bar">
          <Row>
            <Col>
              <Form.Select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option className="text-muted">Select Month</option>

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
          </Row>
        </Form>
      </div>
      <MDBContainer>
        <Bar data={dataValues} style={{ maxHeight: "1000px" }} />
      </MDBContainer>
    </div>
  );
}

export default BarChartGraph;
