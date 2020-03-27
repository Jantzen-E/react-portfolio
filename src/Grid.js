import React from 'react';
import './Responsive.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="flex-grid">
                <div className="leftSide">
                    <div className="tileTitle1">Full-Stack Application</div>
                    <div>
                        <a href="https://eloquent-bell-a1f3a5.netlify.com"><h2 className="col1" id="topRow"></h2></a><a href="https://github.com/Jantzen-E/healthy-react-app">View source code</a>
                    </div>
                    <div className="tileTitle">
                        Full-Stack Application                        
                        <a href="https://goofy-williams-8781e5.netlify.com/"><h2 className="col"></h2></a><a href="https://github.com/Jantzen-E/water-filters-ui" className="aTag">View source code</a>
                    </div>
                    {/* <h2 className="col" id="bottomGridTile"></h2><a href="">View source code</a> */}
                </div>
                <div className="center">
                    <div className="tileTitle1">Camping Checklist</div>
                    <div>
                        <a href="https://vibrant-feynman-83a24c.netlify.com/"><h2 className="col2" id="topRow"></h2></a><a href="https://github.com/Jantzen-E/camping-checklist">View source code</a>
                    </div>
                    <div className="tileTitle">
                        Full-Stack Application
                        <a href="https://hardcore-joliot-39f234.netlify.com/"><h2 className="col2row2"></h2></a><a href="https://github.com/Jantzen-E/to-do-list-ui">View source code</a>
                    </div>
                    {/* <h2 className="col"></h2><a href="">View source code</a>
                    <h2 className="col" id="bottomGridTile"></h2><a href="">View source code</a> */}
                </div>
                <div className="rightSide">
                    <div className="tileTitle1">Portfolio using Bootstrap</div>
                    <a href="https://pensive-turing-40686f.netlify.com/"><h2 className="col3" id="topRow"></h2></a><a href="https://github.com/Jantzen-E/portfolio">View source code</a>
                    {/* <h2 className="col"></h2><a href="">View source code</a>
                    <h2 className="col" id="bottomGridTile"></h2><a href="">View source code</a> */}
                </div>
            </div>
        )
    }
}

export default Grid;