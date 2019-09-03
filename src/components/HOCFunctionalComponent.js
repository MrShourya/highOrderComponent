import React from 'react';
import Loading from "./HOC/Loading";

function HOCFunctionalComponent(props) {
  const greeting = 'High order Function Component!';
  const { name, contacts } = props;
  return (<React.Fragment>
    <h1>{greeting}</h1>
    <strong>Welcome {name} </strong>
    <p>Contacts length: {contacts ? contacts.length : 0} entries</p>
    <hr />
  </React.Fragment>);
}

export default Loading("contacts")(HOCFunctionalComponent);

