import React, { Component } from "react";
import { Table, Thead, Tr } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title} - {this.props.currentCategory}
        </h3>

        {/* Products table */}
        <Table className="table table-striped">
          <Thead>
            <Tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price ($)</th>
              <th>Units In Stock</th>
            </Tr>
          </Thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

