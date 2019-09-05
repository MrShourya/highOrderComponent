import React, { Component } from "react";
import FeedItem from "./FeedItem";
import Loading from "./HOC/Loading";

class Feed extends Component {
constructor(props){
  super(props);
  console.log("Constructor defined so props need to be passed to the parent using super(props)");
}
  render() {
    const { loadingTime, name } = this.props;
    const greeting = 'High order Class Component!';
    return (
      <div className="feed">
        <h1>{greeting}</h1>
        <strong>Welcome {name} </strong>
        <p>Loading time {loadingTime} seconds</p>
        <div>
          {this.props.contacts.length &&
            <FeedItem contacts={this.props.contacts} />
          }
        </div>
      </div>
    );
  }
}

export default Loading("contacts")(Feed);
