import {createSlice,configureStore} from '@reduxjs/toolkit';

const flightData=createSlice({
    name:'flights',
    initialState:{
        flights:[
            {name:'ATR 72-600',date:'12/12/24',rate:'4000',time:'2:30'},
            {name:'ATR 72-700',date:'12/12/24',rate:'4000',time:'3:30'},
            {name:'ATR 72-800',date:'12/12/24',rate:'4000',time:'4:30'},
            {name:'ATR 72-900',date:'12/12/24',rate:'4000',time:'5:30'},
            {name:'ATR 72-500',date:'12/12/24',rate:'4000',time:'6:30'},
            {name:'ATR 72-400',date:'12/12/24',rate:'4000',time:'7:30'},
            {name:'ATR 72-300',date:'12/12/24',rate:'4000',time:'8:30'},
    ]}
});

const questionSlice=createSlice({
    name:'questions',
    initialState:{
        questions:[]
    },
    reducers:{
        setQuestions(state,action){
            state.questions.push(action.payload);
            // return{
            //     questions:[...state.questions,action.payload]
            // }
        }
    }
})

export const flightDataActions=flightData.actions;
export const questionActions=questionSlice.actions;

export const store=configureStore({
    reducer:{
        flights:flightData.reducer,
        allQuestions:questionSlice.reducer,
    }
})