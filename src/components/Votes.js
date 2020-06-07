import React from 'react';

class Votes extends React.Component {
    constructor(){
        super();
        this.state = {
            person1:{up:50, down:27, active:"none",justVoted:false},
            person2:{up:8, down:10, active:"none",justVoted:false},
            person3:{up:50, down:27, active:"none",justVoted:false},
            person4:{up:10, down:5, active:"none",justVoted:false},
        }
    }

    handleChoose = (person, typeOfVote) => {
        console.log("Esta votando por:", person);
        console.log("Voto:", typeOfVote);
        console.log(this.state[person]);
        let modified = {...this.state[person]};
        this.setState({
            [person]: {...modified, active: typeOfVote},
        })

    }

    handleVote = (person) => {
        console.log("Esta votando por:", person);
        console.log(this.state[person]);
        let data = { ...this.state[person] };
        if (data.justVoted) {
            this.setState({ [person]: { ...data, justVoted: false, } })
        } else {
            data.perc = this.calcPercentage(data);
            if (data.active == "up") {
                this.setState({
                    [person]: { ...data, up: data.up + 1, justVoted: true, },
                })
            } else {
                this.setState({
                    [person]: { ...data, down: data.down + 1, justVoted: true, },
                })
            }
        }
    }

    calcPercentage = (data) => {
        if (data.up===0 && data.down===0){
            return 50;
        }else {
            return Math.round( data.up / (data.up+data.down) * 100 );
        }
    }

    render() {
        return (
            <section class="voteSection">
                <p class="voteSection__title">Votes</p>
                <div class="voteContainer">
                    <div class="voteBox voteBox--person1">
                        <div class="voteBox__status voteBox__status--Up" data-name="person1"><i class="fa fa-thumbs-up"></i></div>
                        <h3 class="voteBox__title">Kanye West</h3>
                        <p class="voteBox__date">1 month ago in Entertainment</p>
                        <p class="voteBox__description">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
                        <div class="voteBox__vote" data-name="person1">
                            <div class={`voteBox__btnUp ${this.state["person1"].active=="up" ? "voteBox__btn--active" : "voteBox__btn--inactive"} ${this.state["person1"].justVoted ? "btn--hidden" : "btn--noHidden"}`} id="person1_up" onClick={()=>this.handleChoose("person1","up")}> <i class="fa fa-thumbs-up"></i></div>
                            <div class={`voteBox__btnDown ${this.state["person1"].active=="down" ? "voteBox__btn--active" : "voteBox__btn--inactive"} ${this.state["person1"].justVoted ? "btn--hidden" : "btn--noHidden"}`} id="person1_down" onClick={()=>this.handleChoose("person1","down")}> <i class="fa fa-thumbs-down"></i></div>
                            <div class="voteBox__btnVote" id="person1_vote" onClick={()=>this.handleVote("person1")}>{this.state["person1"].justVoted ? "Vote again" : "Vote now"}</div>
                        </div>
                        <div class="voteBox__barUp" data-name="person1" style={{ width: this.state["person1"].perc + "%" }}><strong class="voteBox__barText"> <i class="fa fa-thumbs-up"></i> {this.state["person1"].perc+"%"} </strong></div>
                        <div class="voteBox__barDown" data-name="person1" style={{ width: (100-this.state["person1"].perc) + "%" }}><strong class="voteBox__barText">{(100 - this.state["person1"].perc)+"%"}<i class="fa fa-thumbs-down fa-flip-horizontal"></i></strong></div>
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

        )
    }
}

export default Votes;