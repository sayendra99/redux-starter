import {combineReducers} from 'redux';
const songsReducer=()=>{
    return [
        {title :'song1', duration:'3:00'},
        {title :'song2', duration:'3:40'},
        {title :'song3', duration:'3:02'},
        {title :'song4', duration:'3:30'}, 
        {title :'song5', duration:'3:04'}
    ]
}
const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});