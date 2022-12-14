import React ,{Component}from 'react';

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
const profile={
  Name:'Noman Tahir',
  Age:22,
  MaritalStatus:'Single'
};
class LocalComponentState extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        list: list,
        profile:profile,
      };
  
    }
  
    render() {
      return (
        <div className="LocalComponentState">
          { this.state.list.map(item =>
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          )}
          
          <h4>Created By</h4>
          {this.state.profile['Name']}
          
          
        </div>
      );
    }
  }
  
  export default LocalComponentState;