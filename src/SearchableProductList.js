// Thinking in React
// 1. Create a design mockup.
// 2. Split and group into small component.
// 3. Create static component, no state, only props.
// 4. Define state and where it lives.
// 5. Create interactivity gradually, data flow up and down.

import React, { Component } from 'react';

function CategoryRow(props){
  return (
    <tr>
      <th colSpan="2">{props.category}</th>
    </tr>
  )
}

function ProductRow(props){
  return (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
    </tr>
    )
}

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleInStockInputChange = this.handleInStockInputChange.bind(this)
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this)
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked);
  }

  render(){
    return (
      <div>
          <input type="text" value={this.props.filterText} onChange={this.handleFilterTextInputChange} />
          <p>
            <input type="checkbox" checked={this.props.inStock} onChange={this.handleInStockInputChange}/> {' '} Only show product in stock
          </p>
      </div>
      );
  }
}

class ProductTable extends Component {
  render(){
    let rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
        if ((product.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) || (!product.stocked && this.props.inStock)) {
          return;
        }

        if (product.category !== lastCategory){
          rows.push(<CategoryRow category={product.category} key={product.category} />);
        }

        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    })

    return (
        <table>
          <thead>
            <tr>
                <td>Name</td>
                <td>Price</td>
            </tr>
          </thead>
          <tbody>
            { rows }
          </tbody>
        </table>
      )
  }
}

export default class SearchableProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
           products: [
              {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
              {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
              {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
              {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
              {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
              {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
          ],
          filterText: '',
          inStock: true
    };
    this.handleInStockInput = this.handleInStockInput.bind(this)
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this)
  }

  handleFilterTextInput(filterText){
    this.setState({
      filterText: filterText
    })
  }

  handleInStockInput(inStock){
    this.setState({
      inStock: inStock
    })
  }

  render() {
    return (
      <div>
        <SearchBar
            filterText={this.state.filterText}
            inStock={this.state.inStock}
            onFilterTextInput={this.handleFilterTextInput}
            onInStockInput={this.handleInStockInput}
        />
        <ProductTable
            products={ this.state.products }
            inStock={this.state.inStock}
            filterText={this.state.filterText}
        />
      </div>
    );
  }
}
