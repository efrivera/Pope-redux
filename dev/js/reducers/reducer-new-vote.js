export default function (state=0, action) {
    switch(action.type) {
        case 'new_vote':
            return action.payload;
            break;
    }
    return state;
}