import React from 'react';

export const Home = (props) => {

    return(
        <div className="home-page-wrapper">
            <div className="home-header-wrapper">
                <div className="home-header">
                    <div>
                        <h2>
                            CV Monster
                        </h2>
                    </div>
                    <div>
                        <h4>
                            The resume that opens doors for you
                        </h4>
                    </div>
                    <div>
                        <p>
                            Show who you are both as a professional and an individual
                        </p>
                    </div>
                </div>
            </div>
            <div className="scroll">
                <div className="home-features"></div>
            </div>
        </div>
    )
}
