import React from 'react';
import './Responsive.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="footer">
                <h5 className="footerTitle">Jantzen Egan 2020</h5>
                <a href="https://github.com/Jantzen-E" className="githubLink">Github</a>
                <a href="https://www.linkedin.com/in/j-egan-/" className="linkedInLink">Linkedin</a>
            </div>
        );   
    }
}

export default Footer;