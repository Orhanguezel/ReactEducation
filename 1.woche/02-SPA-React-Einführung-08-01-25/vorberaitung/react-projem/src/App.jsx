import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    currentCategory: "", // Selected category
    products: [], // List of products
  };

  // Fetch all products when the component is mounted
  componentDidMount() {
    this.getProducts();
  }

  // Change category and fetch products by category
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id); // Use category's id for filtering products
  };

  // Fetch products from the API
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };

    return (
      <div>
        <Container>
          {/* Navigation */}
          <Row>
            <Col>
              <Navi />
            </Col>
          </Row>

          {/* Category and Product Lists */}
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
