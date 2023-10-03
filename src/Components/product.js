import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../redux/productReducer";
import Filter from "./Filter";

function Products() {
  let dispatch = useDispatch();

  let values = useSelector((state) => state.product);

  return (
    <>
      <div className="container-fluid product_table">
        <div
          className="text-white your-orders-title text-center"
          style={{ height: "3em", backgroundColor: "darkGreen" }}
        >
          <h2>Transaction Dashboard</h2>
        </div>

        <div>
          <Filter />
        </div>

        <div className="table_Details">
          <Table bordered className="mt-2 text-center ">
            <thead className="text-danger">
              <tr>
                <th>
                  <b>ID</b>
                </th>
                <th>
                  <b>Title</b>
                </th>
                <th>
                  <b>Description</b>
                </th>
                <th>
                  <b>Price</b>
                </th>
                <th>
                  <b>Category</b>
                </th>
                <th>
                  <b>Sold</b>
                </th>
                <th>
                  <b>Image</b>
                </th>
              </tr>
            </thead>
            <tbody className="text-white">
              {values.products.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.title}</td>
                    <td>{e.description}</td>
                    <td>{e.price}</td>
                    <td>{e.category}</td>
                    <td>{e.sold ? "YES" : "No"}</td>
                    <td>
                      <img
                        style={{ width: "5em", height: "5em" }}
                        src={e.image}
                        alt=""
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Products;
