import React, { Component } from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class EventHandler extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list,
    };

    this.onDismiss = this.onDismiss.bind(this);
    //this.onAlert=this.onAlert.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }
  onAlert(id){
    console.log(id)
    const item=this.state.list.filter(element=>{
        console.log(element.objectID)
        return element.objectID===id

    })
    console.log(item)
    alert(`${item[0].title} ${item[0].points} ${item[0].objectID}`)
  }

  render() {
    return (
      <div className="App">
        { this.state.list.map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
              <button
                onClick={this.onAlert.bind(this,item.objectID)}
                type="button"
              >
                Alert Info
              </button>
            </span>
          </div>
        )}

        <h1>HBJKBDWKWKJD</h1>
      </div>
    );
  }
}

export default EventHandler;