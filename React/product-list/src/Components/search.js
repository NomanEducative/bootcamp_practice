import React, { Component } from 'react'
 class search extends Component {
  render() {
    const {value,onChange,children}=this.props
    return (
      <div className='searchBarDiv'>
        <form>
        <input id='inputText' className ="form-control"type="text" value={value} onChange={onChange} placeholder="Search Product" />
        {children}
      </form>
      </div>
    )
  }
}

export default search
