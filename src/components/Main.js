import React from 'react';

function Main(){
    return (
        <div className="wrapper">
            <header>
                <h1>Rule of Thumb.</h1>
                <nav>
                    <a href="#">Past Trials</a>
                    <a href="#">How It Works</a>
                    <a href="#">Log In / Sign Up</a>
                    <a href="#"><i className="fa fa-search"></i></a>
                </nav>
            </header>
            <section className="main">
                <p className="main__subtitle">What's your opinion on</p>
                <h2 className="main__title">Pope Francis?</h2>
                <p className="main__description">He's talking tough on clegy sexual abuse, but is he just another papal pervert
            protector? (thumbs down) or a true pedophile punishing pontiff? (tumbs up)</p>
                <p>What's Your Verdict?</p>
                <div className="main__vote">
                    <div className="main__voteUp"><i className="fa fa-thumbs-up"></i></div>
                    <div className="main__voteDown"><i className="fa fa-thumbs-down fa-flip-horizontal"></i></div>
                </div>
            </section>
            <div className="mainDue">
                <div className="mainDue__text">CLOSING IN</div>
                <div className="mainDue__counter">22 days</div>
            </div>
        </div>
    )
}

export default Main;