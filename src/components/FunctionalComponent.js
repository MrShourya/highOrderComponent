import React from 'react';
function FunctionalComponent(props) {
  const greeting = 'Normal Function Component called from inside a HOC';
  const { loadingTime } = props;
  return <React.Fragment>
    <h3>{greeting}</h3>
    <p>Loading time {loadingTime} seconds</p>
    <hr />
  </React.Fragment>;
}
export default FunctionalComponent;

