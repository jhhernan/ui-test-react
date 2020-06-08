import React from 'react';
import Data from '../data/votes.json';
import VoteBox from './VoteBox';

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
         let votes = [...this.state.votes];

         votes.forEach(person => { person.perc=this.calcPercentage(person) });

         this.setState({ votes: votes }, () => {
              localStorage.setItem("votes", JSON.stringify(this.state.votes));
         });
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
        let data = { ...person };

        let modified;
        if (data.justVoted) {
            modified = { ...data, justVoted: false, };
        } else {
            data.perc = this.calcPercentage(data);
            if (data.active === "up") {
                modified = { ...data, up: data.up + 1, justVoted: true, };
            } else if (data.active === "down") {
                modified = { ...data, down: data.down + 1, justVoted: true, };
            } else {
                alert("Please choose thumb up or thumb down!");
            }
        }
        
        if (modified){
            const votes = this.state.votes.map(per => per.name===perName ? modified : per);
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
         //let votes = [...this.state.votes];
         //let [person1]= votes.filter(per => per.name==="person1");
         //let [person2]= votes.filter(per => per.name==="person2");

        return (
            <section className="voteSection">
                <p className="voteSection__title">Votes</p>
                <div className="voteContainer">

                    {this.state.votes.map(person => 
                            <VoteBox person={person} handleVote={this.handleVote} handleChoose={this.handleChoose}/>
                    )}

                </div>
            </section>

        )
    }
}

export default Votes;