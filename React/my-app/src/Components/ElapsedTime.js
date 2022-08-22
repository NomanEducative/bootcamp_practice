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

const isSearched = (searchTerm) => (item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class ElapsedTime extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
      isChecked:false,
      time:0
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.handleCheckClick=this.handleCheckClick.bind(this);
    this.tick=this.tick.bind(this);

  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }
  handleCheckClick(){
    this.setState((prevState,props)=>({
        isChecked:!prevState.isChecked
    }))
  }
  componentDidMount(){
    this.interval=setInterval(this.tick,1000);
    console.log('MOUNT')
  }
  tick(){
    this.setState((prevState)=>({
        time:prevState.time+1
    }))

  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }


  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        >
          Search Item
        </Search>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
        <input type="checkbox" name="Show Time" onChange={this.handleCheckClick} value={this.state.isChecked}/>
        <label htmlFor="Show Time">Show Elapsed Time</label>
        {this.state.isChecked?<h1 >{this.state.time} seconds</h1>:""}
      </div>
    );
  }
}

const Search = ({ value, onChange, children }) => {

    // do something
  
    return (
      <form>
        {children} <input
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
    );
  }

  const Table=({list,pattern,onDismiss})=>{
    return (
        <div>
        {list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
            <Button onClick={() => onDismiss(item.objectID)}>
                Dismiss
              </Button>
            </span>
          </div>
        )}
      </div>
    )
  }


const  Button=({onClick,className='',children})=>{
      return (
        <button
          onClick={onClick}
          className={className}
          type="button"
        >
          {children}
        </button>
      );
    }

export default ElapsedTime;
