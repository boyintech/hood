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

export default SongsList;