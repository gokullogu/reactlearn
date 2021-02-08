import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
//stateless component
function Welcome(){
return <h2>helo all this is <strong> my first react app created </strong></h2>;
}

ReactDOM.render(<Welcome></Welcome>,document.getElementById('root'));
//create react element
const Hello=()=>{
  return React.createElement('h2',{},'hello world');
};
ReactDOM.render(<Hello></Hello>,document.getElementById('root'));
