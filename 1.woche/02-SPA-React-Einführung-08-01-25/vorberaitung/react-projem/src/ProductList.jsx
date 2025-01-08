import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title} - {this.props.currentCategory}
        </h3>

        {/* Products table */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price ($)</th>
              <th>Units In Stock</th>
            </tr>
          </thead>
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
        </table>
      </div>
    );
  }
}

