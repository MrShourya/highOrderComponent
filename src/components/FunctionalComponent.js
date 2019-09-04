import React from 'react';
import ChildArrayReturnComponent from './ChildArrayReturnComponent';
function FunctionalComponent(props) {
  const greeting = 'Normal Function Component called from inside a HOC';
  const { loadingTime } = props;
  return <React.Fragment>
    <h3>{greeting}</h3>
    <p>Loading time {loadingTime} seconds</p>
    <ChildArrayReturnComponent success/> // when a prop is not defined, its value is always passed as true
    <hr />
  </React.Fragment>;
}
export default FunctionalComponent;

