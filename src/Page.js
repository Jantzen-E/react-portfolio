import React from 'react';
import Title from './Title';
import Grid from './Grid';
import Footer from './Footer';
import './Responsive.css';

function Page() {
    return(
        <div>
        <Title />
        <Grid />
        <Footer />
        </div>
    )
}

export default Page;