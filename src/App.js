import React from 'react';
import './App.css';

function App() {
    return (
        <div>
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
            <section class="info">
                <div class="info__title"><p class="info__title__p">Speak out. Be heard.</p> <p class="info__title__big"><strong>Be counted</strong></p></div>
                <div class="info__description"><p>Rule of thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely.
                    It's easy: You share your opinion, we analyze and put the data in a public report.</p>
                </div>
            </section>
            <section class="voteSection">
                <p class="voteSection__title">Votes</p>
                <div class="voteContainer">
                    <div class="voteBox voteBox--person1">
                        <div class="voteBox__status voteBox__status--Up" data-name="person1"><i class="fa fa-thumbs-up"></i></div>
                        <h3 class="voteBox__title">Kanye West</h3>
                        <p class="voteBox__date">1 month ago in Entertainment</p>
                        <p class="voteBox__description">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
                        <div class="voteBox__vote" data-name="person1">
                            <div class="voteBox__btnUp" id="person1_up" onClick="choose(this)"> <i class="fa fa-thumbs-up"></i></div>
                            <div class="voteBox__btnDown" id="person1_down" onClick="choose(this)"> <i class="fa fa-thumbs-down"></i></div>
                            <div class="voteBox__btnVote" id="person1_vote" onClick="voteNow(this)">Vote now</div>
                        </div>
                        <div class="voteBox__barUp" data-name="person1"><strong class="voteBox__barText"> <i class="fa fa-thumbs-up"></i> 64% </strong></div>
                        <div class="voteBox__barDown" data-name="person1"><strong class="voteBox__barText">36% <i class="fa fa-thumbs-down fa-flip-horizontal"></i></strong></div>
                    </div>

                    <div class="voteBox voteBox--person2">
                        <div class="voteBox__status voteBox__status--Down" data-name="person2"><i class="fa fa-thumbs-down fa-flip-horizontal"></i></div>
                        <h3 class="voteBox__title">Mark Zuckerberg</h3>
                        <p class="voteBox__date">1 month ago in Business</p>
                        <p class="voteBox__description">Thank you for voting!</p>
                        <div class="voteBox__vote" data-name="person2">
                            <div class="voteBox__btnUp" id="person2_up" onClick="choose(this)"> <i class="fa fa-thumbs-up"></i></div>
                            <div class="voteBox__btnDown" id="person2_down" onClick="choose(this)"> <i class="fa fa-thumbs-down"></i></div>
                            <div class="voteBox__btnVote" id="person2_vote" onClick="voteNow(this)">Vote now</div>
                        </div>
                        <div class="voteBox__barUp" data-name="person2"><strong class="voteBox__barText"> <i class="fa fa-thumbs-up"></i> 36% </strong></div>
                        <div class="voteBox__barDown" data-name="person2"><strong class="voteBox__barText">64% <i class="fa fa-thumbs-down fa-flip-horizontal"></i></strong>
                        </div>
                    </div>

                    <div class="voteBox voteBox--person3">
                        <div class="voteBox__status voteBox__status--Down" data-name="person3"><i class="fa fa-thumbs-down fa-flip-horizontal"></i></div>
                        <h3 class="voteBox__title">Cristina Fernández de Kirchner</h3>
                        <p class="voteBox__date">1 month ago in Politics</p>
                        <p class="voteBox__description">Vestibulum diam ante, portitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
                        <div class="voteBox__vote" data-name="person3">
                            <div class="voteBox__btnUp" id="person3_up" onClick="choose(this)"> <i class="fa fa-thumbs-up"></i></div>
                            <div class="voteBox__btnDown" id="person3_down" onClick="choose(this)"> <i class="fa fa-thumbs-down"></i></div>
                            <div class="voteBox__btnVote" id="person3_vote" onClick="voteNow(this)">Vote now</div>
                        </div>
                        <div class="voteBox__barUp" data-name="person3"><div class="voteBox__barText"> <i class="fa fa-thumbs-up"></i> 36% </div></div>
                        <div class="voteBox__barDown" data-name="person3"><div class="voteBox__barText">64% <strong class="fa fa-thumbs-down fa-flip-horizontal"></strong></div></div>
                    </div>

                    <div class="voteBox voteBox--person4">
                        <div class="voteBox__status voteBox__status--Up" data-name="person4"><i class="fa fa-thumbs-up"></i></div>
                        <h3 class="voteBox__title">Malala Yousafzai</h3>
                        <p class="voteBox__date">1 month ago in Entertainment</p>
                        <p class="voteBox__description">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
                        <div class="voteBox__vote" data-name="person4">
                            <div class="voteBox__btnUp" id="person4_up" onClick="choose(this)"> <i class="fa fa-thumbs-up"></i></div>
                            <div class="voteBox__btnDown" id="person4_down" onClick="choose(this)"> <i class="fa fa-thumbs-down"></i></div>
                            <div class="voteBox__btnVote" id="person4_vote" onClick="voteNow(this)">Vote now</div>
                        </div>
                        <div class="voteBox__barUp" data-name="person4"><strong class="voteBox__barText"> <i class="fa fa-thumbs-up"></i> 64% </strong></div>
                        <div class="voteBox__barDown" data-name="person4"><strong class="voteBox__barText">36% <i class="fa fa-thumbs-down fa-flip-horizontal"></i></strong>
                        </div>
                    </div>
                </div>
            </section>
            <section class="add">
                <div class="add__description">Is there anyone else you want us to add?</div>
                <div class="add__button">Submit a Name</div>
            </section>
            <footer class="footer">
                <section class="footer__terms">
                    <a href="">Terms and Conditions</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Contact Us</a>
                </section>
                <section class="footer__social">
                    <a href="">Follow Us</a>
                    <a href="www.facebook.com"><i class="fa fa-facebook-square"></i></a>
                    <a href="www.twitter.com"><i class="fa fa-twitter"></i></a>
                </section>
            </footer>


        </div>
    );
}

export default App;
