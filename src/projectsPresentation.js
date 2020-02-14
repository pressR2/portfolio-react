import React from "react";
import YouTube from 'react-youtube';

class ProjectsPresentation extends React.Component {
    render() {
        const opts ={
            height: '600',
            width: '1200',
            playerVars: {rel: 0}
        }
        return (
            <YouTube videoId={this.props.selectVideo} onReady={this._onReady} opts={opts}>
                
            </YouTube>
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}

export default ProjectsPresentation;
