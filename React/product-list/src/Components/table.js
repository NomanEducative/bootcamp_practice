import React, { Component } from 'react'
import ProductHeadingRow from './productHeadingRow';
import ProductRow from './productRow';
class table extends Component {
    render() {
        const rows = [];
        let lastCategory = null;
        const isStock=this.props.isStock;
        
        this.props.products.forEach((product) => {
          
            if(isStock && !product.stocked){
                return;
            }
            if (product.category !== lastCategory) {
            rows.push(
              <ProductHeadingRow
                category={product.category}
                key={product.category} />
            );
          }
          rows.push(
            <ProductRow
              product={product}
              key={product.name} />
          );
          lastCategory = product.category;
        });
    
        return (
          <table id='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        );
      }
}

export default table
