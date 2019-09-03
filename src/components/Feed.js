import React, { Component } from "react";
import FeedItem from "./FeedItem";
import Loading from "./HOC/Loading";

class Feed extends Component {
  render() {
    const { loadingTime,name } = this.props;
    return (
      <div className="feed">
        <strong>Welcome {name} </strong>
        <p>Loading time {loadingTime} seconds</p>
        <FeedItem contacts={this.props.contacts} />
      </div>
    );
  }
}

export default Loading("contacts")(Feed);
