import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const SongsList = () => {
    const [DirData, updateDirData] = useState(useSelector(state => state.tasks.initalState));
    const SongList = [];
    DirData.map((musicFiles) => {
        if(musicFiles.data.length)
            SongList.push(musicFiles);
    })
    return SongList;
}     

export const searchByID = (id) => {
    const tracks = SongsList();
    let trackDetail = {};
    tracks.map((Dirs) => {
        // console.log(Dirs.data);
                    Dirs.data.map((track) => {
                if(track.id === id) 
                    trackDetail = track;
            });
    });
    return trackDetail;
}

export default SongsList;