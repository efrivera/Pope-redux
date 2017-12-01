export const selectUser = (userr) => {
    console.log('You clicked on user: ', userr.first);
    
    return {
        type: 'user_selected',
        payload: userr
    }
};

export const sendVote = (voting) => {
    console.log(`u'r great, ${voting.name}, ${voting.votes.qty}`);

    return {
        type: 'new_vote',
        payload: voting.id
    }
};