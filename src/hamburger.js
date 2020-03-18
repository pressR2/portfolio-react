import React from "react";

class Hamburger extends React.Component {
    render() {
        return (
            <div className="drawer-control" onClick={this.props.menuHandling} role="button" aria-label="open drawer" tabIndex={0}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
                </svg>
            </div>
        );
    }
}

export default Hamburger;
