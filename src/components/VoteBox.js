import React from 'react';

class VoteBox extends React.Component {

    handleChoose = (perName, typeOfVote) => {
        this.props.handleChoose(perName, typeOfVote);
    }

    handleVote = (perName) => {
        this.props.handleVote(perName);
    }

    render() {
        let person=this.props.person;

        return (
            <div className={`voteBox voteBox--${person.name}`}>
                <div className={`voteBox__status ${person.perc>=50 ? "voteBox__status--Up" : "voteBox__status--Down"}`}><i className={`${person.perc>=50 ? "fa fa-thumbs-up" : "fa fa-thumbs-down fa-flip-horizontal" }`}></i></div>
                <h3 className="voteBox__title">{person.title}</h3>
                <p className="voteBox__date">{person.date}</p>
                <p className="voteBox__description">{person.justVoted? "Thank you for voting" : person.description}</p>
                <div className="voteBox__vote" >
                    <div className={`voteBox__btnUp ${person.active === "up" ? "voteBox__btn--active" : "voteBox__btn--inactive"} ${person.justVoted ? "btn--hidden" : "btn--noHidden"}`} id="person1_up" onClick={() => this.handleChoose(person.name, "up")}> <i className="fa fa-thumbs-up"></i></div>
                    <div className={`voteBox__btnDown ${person.active === "down" ? "voteBox__btn--active" : "voteBox__btn--inactive"} ${person.justVoted ? "btn--hidden" : "btn--noHidden"}`} id="person1_down" onClick={() => this.handleChoose(person.name, "down")}> <i className="fa fa-thumbs-down"></i></div>
                    <div className="voteBox__btnVote" id="person1_vote" onClick={() => this.handleVote(person.name)}>{person.justVoted ? "Vote again" : "Vote now"}</div>
                </div>
                <div className="voteBox__barUp" style={{ width: person.perc + "%" }}><strong className="voteBox__barText"> <i className="fa fa-thumbs-up"></i> {person.perc + "%"} </strong></div>
                <div className="voteBox__barDown" style={{ width: (100 - person.perc) + "%" }}><strong className="voteBox__barText">{(100 - person.perc) + "% "}<i className="fa fa-thumbs-down fa-flip-horizontal"></i></strong></div>
            </div>
        )
    }
}

export default VoteBox;