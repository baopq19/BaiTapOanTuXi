const stateOanTuXi = {
    selections: [
        {id: 'bua', img: './img/bua.png', selected: false},
        {id: 'keo', img: './img/keo.png', selected: true},
        {id: 'bao', img: './img/bao.png', selected: false},
    ],

    result: "I'm iron man, i love you 3000 !!!",
    won: 0,
    played: 0,
    computerSelected: {id: 'bao', img: './img/bao.png', selected: true},
}



const oanTuXiReducer = (state =  stateOanTuXi, action) => {

    switch (action.type) {
        case 'SELECT': {
            //Tạo mảng selections mới, set selected về false
            let selectionsUpdate = [...state.selections];
            selectionsUpdate = selectionsUpdate.map((item, index) => {
                //Tìm kiếm vã set selected selection
                if(item.id === action.id){
                    return {...item, selected: true};
                }
                return {...item, selected: false};
            })

            state.selections = selectionsUpdate;

            return {... state}
        }
        case 'RANDOM': {
            let randomNumber = Math.floor(Math.random() * 3);
            let randomSelection = state.selections[randomNumber];

            state.computerSelected = randomSelection;

            return {... state};
        }
        case 'END_GAME': {
            let playerSelected = state.selections.find(item => item.selected === true).id;
            let computerSelected = state.computerSelected.id;
            state.played++;
            if(playerSelected === computerSelected) {
                state.result = 'Hoà !!!';
            } else {
                let win = false;
                switch (playerSelected) {
                    case 'bua':
                        if(computerSelected === 'keo') {
                            win = true;
                        }
                        break;
                    case 'keo':
                        if(computerSelected === 'bao') {
                            win = true;
                        }
                        break;
                    case 'bao':
                        if(computerSelected === 'bua') {
                            win = true;
                        }
                        break;
                }
                if(win) {
                    state.result = "I'm iron man!!!";
                    state.won++;
                } else {
                    state.result = "GG, Mi thua rồi!!!";
                }
            }

            return {... state};
        }

        default: return {... state}
    }

}

export default oanTuXiReducer; 