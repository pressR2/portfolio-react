import React from "react";
import FeedReaderTests from "../images/feed-reader-screenshot.png";

class FeedReader extends React.Component {
  render() {
    return (
        <div>
          <img className="feed-reader-screenShot" src={FeedReaderTests} alt="tests results" />
        </div>
    );
  }
}

export default FeedReader;
