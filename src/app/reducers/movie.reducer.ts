import  { createReducer ,Action , on  } from '@ngrx/store'



const _movieReducer = createReducer("" ,on("test",    (state) =>  "ttt" ))


export function movieReducer(state : any = "" , action : Action){
    return _movieReducer(state,action)
}