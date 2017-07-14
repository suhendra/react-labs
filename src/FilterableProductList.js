import React, { Component } from 'react';

function CategoryRow(props){
  return (
    <tr>
      <th colSpan='2'>{props.category}</th>
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

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleOnStockChange = this.handleOnStockChange.bind(this)
  }

  handleFilterTextChange(e){
    this.props.onFilterInputChange(e.target.value)
  }
  handleOnStockChange(e){
    this.props.onStockInputChange(e.target.checked)
  }

  render(){
    return (
      <div>
        <input value={this.props.value} onChange={this.handleFilterTextChange} />
        <p>
          <input type="checkbox" checked={this.props.onStock} onChange={this.handleOnStockChange}/>
          {' '} show only ready on stock products.
        </p>
      </div>
      )
  }
}

class ProductTable extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    let rows = []
    let lastCategory = null

    this.props.products.forEach((product) => {

      if((product.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) || (!product.stocked && this.props.onStock)){
        return;
      }

      if(product.category !== lastCategory){
        rows.push(<CategoryRow category={product.category} key={product.category} />);
      }

      lastCategory = product.category;

      rows.push(<ProductRow product={product} key={product.name} />)
    })

    return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { rows }
          </tbody>
        </table>
      )
  }
}

export default class FilterableProductList extends Component {
  constructor(props) {
    super(props);

    this.handleOnFilterInputChange = this.handleOnFilterInputChange.bind(this)
    this.handleOnStockInputChange = this.handleOnStockInputChange.bind(this)

    this.state = {
          filterText: '',
          onStock: false
    };
  }

  handleOnFilterInputChange(filterText){
    this.setState({ filterText: filterText });
  }

  handleOnStockInputChange(onStock){
    this.setState({ onStock: onStock });
  }


  render() {
    const products = [
              {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
              {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
              {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
              {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
              {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
              {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
          ];
    return (
      <div>
        <SearchBar
          onStock={this.state.onStock}
          value={this.state.filterText}
          onFilterInputChange={this.handleOnFilterInputChange}
          onStockInputChange={this.handleOnStockInputChange}
        />
        <ProductTable
          onStock={this.state.onStock}
          products={products}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
