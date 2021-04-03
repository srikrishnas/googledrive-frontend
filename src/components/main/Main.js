import React from 'react'
import '../../styles/Main.css'
import FilesView from '../filesView/FilesView';
import Header from '../header'
import Sidebar from '../sidebar'
import '../../App.css'

const Main = () => {
    return (
            <>
                <Header />
                <div className="app_main">
                    <Sidebar />
                    <FilesView />
                </div>
                ** refresh again your file will be visible (**Work Under Progress**)
            </>
    )
}

export default Main
