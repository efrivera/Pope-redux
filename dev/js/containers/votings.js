import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {sendVote} from '../actions';

class Voting extends Component {

    createVotingsList() {
        console.log(this.props.newVote);

        return this.props.votingList.map((voting) => {
            let votesNum = voting.votes.qty
            
            if(this.props.newVote === voting.id) {
                votesNum++;
            }

            return (
                <div key={voting.id}>
                    {/* image */}
                    <h2>
                        {voting.name}
                    </h2>
                    <h3>
                        {voting.date} in <span>{voting.category}</span>
                    </h3>
                    <p>
                        {voting.topic}
                    </p>
                    <div>
                        <span>Thumbs up</span>
                        <span>Thumbs down</span>
                        <button 
                            onClick={() => this.props.sendVote(voting)}
                        >
                            Vote now
                        </button>
                    </div>
                    <div>
                        <span>Thumbs up: {voting.votes.positive}</span>,
                        <span>Thumbs down: {voting.votes.negative}</span>,
                        {/* <span>Votes: {voting.id}</span> */}
                        <span>Votes: {votesNum}
                        </span>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.createVotingsList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        votingList: state.votings,
        newVote: state.newVote
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({sendVote: sendVote}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Voting);