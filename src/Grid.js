import React from 'react';
import './Responsive.css';

function Grid() {
    return(
        <div className="flex-grid">
            <div className="leftSide">
                <div className="tileTitle1">Full-Stack Application</div>
                <div>
                    <a href="https://eloquent-bell-a1f3a5.netlify.com"><p className="col1" id="topRow"></p></a><a href="https://github.com/Jantzen-E/healthy-react-app">View source code</a>
                </div>
                <div className="tileTitle">
                    Full-Stack Application                        
                    <a href="https://goofy-williams-8781e5.netlify.com/"><p className="col"></p></a><a href="https://github.com/Jantzen-E/water-filters-ui" className="aTag">View source code</a>
                </div>
                <div className="tileTitle">
                    Wasatch Sleep Health Center                        
                    <a href="https://frosty-mayer-ddf8f6.netlify.app/"><p className="col1row3"></p></a><a href="https://github.com/Jantzen-E/wasatch-sleep" className="aTag">View source code</a>
                </div>
                {/* <h2 className="col" id="bottomGridTile"></h2><a href="">View source code</a> */}
            </div>
            <div className="center">
                <div className="tileTitle1">Camping Checklist</div>
                <div>
                    <a href="https://vibrant-feynman-83a24c.netlify.com/"><p className="col2" id="topRow"></p></a><a href="https://github.com/Jantzen-E/camping-checklist">View source code</a>
                </div>
                <div className="tileTitle">
                    Full-Stack Application
                    <a href="https://hardcore-joliot-39f234.netlify.com/"><p className="col2row2"></p></a><a href="https://github.com/Jantzen-E/to-do-list-ui">View source code</a>
                </div>
                {/* <h2 className="col"></h2><a href="">View source code</a>
                <h2 className="col" id="bottomGridTile"></h2><a href="">View source code</a> */}
            </div>
            <div className="rightSide">
                <div className="tileTitle1">Portfolio using Bootstrap</div>
                <div>
                    <a href="https://pensive-turing-40686f.netlify.com/"><p className="col3" id="topRow"></p></a><a href="https://github.com/Jantzen-E/portfolio">View source code</a>
                </div>
                <div className="tileTitle">Credit Score App</div>
                <div>
                    <a href="https://dazzling-ptolemy-f505d6.netlify.com/"><p className="col3row2"></p></a><a href="https://github.com/Jantzen-E/credit-score">View source code</a>
                </div>
                {/* <h2 className="col"></h2><a href="">View source code</a>
                <h2 className="col" id="bottomGridTile"></h2><a href="">View source code</a> */}
            </div>
        </div>
    )
}

export default Grid;