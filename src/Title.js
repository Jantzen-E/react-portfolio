import React from 'react';
import './Responsive.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="title">
                <h1>Jantzen's Portfolio</h1>
                <h3>Click on the images to see some of my work in Web Development</h3>
            </div>
        )
    }
}

export default Title;