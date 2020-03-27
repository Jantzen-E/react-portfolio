import React from 'react';
import Nav from './Nav';
import Title from './Title';
import Grid from './Grid';
import Footer from './Footer';
import './Responsive.css';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {/* <Nav /> */}
                <Title />
                <Grid />
                <Footer />
            </div>
        );
    }
}

export default Page;