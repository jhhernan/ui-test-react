import React from 'react';
import Data from '../data/votes.json';
class Votes extends React.Component {
    constructor(){
        super();
        if (localStorage.getItem("votes")===null){
            localStorage.setItem("votes",JSON.stringify(Data));
        }

        const votes= JSON.parse(localStorage.getItem("votes"));
        
        this.state = {
            votes,
        }
    }

    componentDidMount(){
        //let votes = this.state.votes;
        //console.log(this.state.votes);
        

    }

    handleChoose = (perName, typeOfVote) => {

        const [person] = this.state.votes.filter(per =>  (per.name===perName));
        let modified = {...person, active: typeOfVote };
        const votes = this.state.votes.map(per => per.name===perName ? modified : per);

        this.setState({
            votes: votes,
        },() => {localStorage.setItem("votes",JSON.stringify(this.state.votes))});
    }

    handleVote = (perName) => {
        const [person] = this.state.votes.filter(per =>  (per.name===perName));
        //console.log("Esta votando por:", person);
        //console.log(this.state[person]);
        let data = { ...person };
        console.log("La data es:", data);
        let modified;
        if (data.justVoted) {
            modified = { ...data, justVoted: false, };
        } else {
            data.perc = this.calcPercentage(data);
            if (data.active == "up") {
                modified = { ...data, up: data.up + 1, justVoted: true, };
            } else if (data.active == "down") {
                modified = { ...data, down: data.down + 1, justVoted: true, };
            } else {
                alert("Please choose thumb up or thumb down!");
            }
        }
        
        if (modified){
            const votes = this.state.votes.map(per => per.name===perName ? modified : per);
            console.log("Los vots al modificar", votes);
            this.setState({votes},()=>{localStorage.setItem("votes",JSON.stringify(this.state.votes))});
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
        let votes = this.state.votes;
        let [person1]= votes.filter(per => per.name==="person1");
        console.log("Los datos de person1",person1);
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
                            <div class={`voteBox__btnUp ${person1.active=="up" ? "voteBox__btn--active" : "voteBox__btn--inactive"} ${person1.justVoted ? "btn--hidden" : "btn--noHidden"}`} id="person1_up" onClick={()=>this.handleChoose("person1","up")}> <i class="fa fa-thumbs-up"></i></div>
                            <div class={`voteBox__btnDown ${person1.active=="down" ? "voteBox__btn--active" : "voteBox__btn--inactive"} ${person1.justVoted ? "btn--hidden" : "btn--noHidden"}`} id="person1_down" onClick={()=>this.handleChoose("person1","down")}> <i class="fa fa-thumbs-down"></i></div>
                            <div class="voteBox__btnVote" id="person1_vote" onClick={()=>this.handleVote("person1")}>{person1.justVoted ? "Vote again" : "Vote now"}</div>
                        </div>
                        <div class="voteBox__barUp" data-name="person1" style={{ width: person1.perc + "%" }}><strong class="voteBox__barText"> <i class="fa fa-thumbs-up"></i> {person1.perc+"%"} </strong></div>
                        <div class="voteBox__barDown" data-name="person1" style={{ width: (100-person1.perc) + "%" }}><strong class="voteBox__barText">{(100 - person1.perc)+"%"}<i class="fa fa-thumbs-down fa-flip-horizontal"></i></strong></div>
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