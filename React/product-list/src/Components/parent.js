import React ,{Component}from "react";
import Search from "./search";
import Table from "./table";

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
  const isSearched = (searchTerm) => (item) =>{

  return item.name.toLowerCase().includes(searchTerm.toLowerCase())
};
  let products=PRODUCTS;
class Parent extends Component{

    
    constructor(props) {
      super(props)
    
      this.state = {
         searchValue:"",
         isStockOnly:false
      }
      this.onSearchChange=this.onSearchChange.bind(this);
      this.handleCheckClick=this.handleCheckClick.bind(this);
    }
    
    onSearchChange(event) {
        this.setState({ searchValue: event.target.value });
        products=PRODUCTS.filter(isSearched(event.target.value));
      }
      handleCheckClick(){
        this.setState((prevState)=>({
            isStockOnly:!prevState.isStockOnly
        }))
        console.log(this.state.isStockOnly)
      }
      
    render(){
        return(
          <div className="parentDiv">
            <Search value={this.searchValue} onChange={this.onSearchChange}></Search>
            <div id="checkBoxDiv">
            <input type="checkbox" name="Show Time" onChange={this.handleCheckClick} value={this.state.isChecked}/>
            <label htmlFor="Show Time">Remove Stocked Out Products</label>
            </div>
            <Table products={products} isStock= {this.state.isStockOnly}/>
          </div>
        )
    }

    
}

export default Parent