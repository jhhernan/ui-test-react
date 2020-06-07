import React from 'react';

function Main(){
    return (
        <div class="wrapper">
            <header>
                <h1>Rule of Thumb.</h1>
                <nav>
                    <a href="#">Past Trials</a>
                    <a href="#">How It Works</a>
                    <a href="#">Log In / Sign Up</a>
                    <a href="#"><i class="fa fa-search"></i></a>
                </nav>
            </header>
            <section class="main">
                <p class="main__subtitle">What's your opinion on</p>
                <h2 class="main__title">Pope Francis?</h2>
                <p class="main__description">He's talking tough on clegy sexual abuse, but is he just another papal pervert
            protector? (thumbs down) or a true pedophile punishing pontiff? (tumbs up)</p>
                <p>What's Your Verdict?</p>
                <div class="main__vote">
                    <div class="main__voteUp"><i class="fa fa-thumbs-up"></i></div>
                    <div class="main__voteDown"><i class="fa fa-thumbs-down fa-flip-horizontal"></i></div>
                </div>
            </section>
            <div class="mainDue">
                <div class="mainDue__text">CLOSING IN</div>
                <div class="mainDue__counter">22 days</div>
            </div>
        </div>
    )
}

export default Main;