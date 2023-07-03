import { createSlice } from "@reduxjs/toolkit";


const initialState={
    movies:{},
    shows:{},
    selectMovieOrShow:{} 
}

const movieSlice = createSlice({
    name:"movies",
    initialState:initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies=payload;
        },
        addShows:(state,{payload})=>{
            state.shows=payload;
        },
        addMovieOrShow:(state,{payload})=>{
            state.selectMovieOrShow=payload;
        },
        removeSelectedMovieOrShow:(state)=>{
            state.selectMovieOrShow={};
        },
    }
    
})

export const {addMovies,addShows,addMovieOrShow,removeSelectedMovieOrShow} =movieSlice.actions
export const getAllMovies =(state)=>state.movies.movies
export const getAllShows = (state)=> state.movies.shows
export const getSelectedMovieOrShow= (state)=> state.movies.selectMovieOrShow
export default movieSlice.reducer