import React from 'react';
// import Page from './Page';
import Footer from './Footer';
class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <h3 className="aboutMeTitle">Here are some things you need to know about me...</h3>
                </div>
                <div>
                    <ul className="aboutMe">
                        <li>I enjoy working on new projects</li>
                        <li>I love trying to solve problems</li>
                        <li>I am passionate about learning new things</li>
                        <li>I am a hard worker</li>
                        <li>I like to fix things</li>
                        <li>I love Web Development</li>
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;