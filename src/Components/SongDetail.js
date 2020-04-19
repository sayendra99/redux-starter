import React from 'react';
import { connect } from "react-redux";
const SongDetail=(props)=>{
    if(!props.song){
        return(<div>Select Song</div>)
    }
    return(
        <div>
            <h1>Details for : {props.song.title}</h1>
            <p>Duration : {props.song.duration}</p>
        </div>
    )

};
const mapStateToProps=(state)=>{
    return{
        song:state.selectedSong
    }
}
export default connect(mapStateToProps)(SongDetail);