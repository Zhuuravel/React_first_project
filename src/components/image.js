import React from "react";

class Image extends React.Component {
    render() {
        return (
            <img className="image" src={this.props.image} />
        )
    }
}

export default Image