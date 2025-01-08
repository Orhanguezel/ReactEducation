import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [], // List of categories
  };

  componentDidMount() {
    this.getCategories();
  }

  // Fetch categories from the API
  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem active={category.categoryName === this.props.currentCategory? true:false} // Highlight the selected category
              key={category.id} // Use category's id as the key
              onClick={() => this.props.changeCategory(category)}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}



