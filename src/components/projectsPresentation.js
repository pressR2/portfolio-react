import React from "react";
import YouTube from "react-youtube";

class ProjectsPresentation extends React.Component {
  render() {
    const opts = {
      height: "520",
      width: "640",
      playerVars: { rel: 0 }
    };
    return (
      <div className="video-wrapper">
        <YouTube
          videoId={this.props.selectVideo}
          onReady={this._onReady}
          opts={opts}
        ></YouTube>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default ProjectsPresentation;
