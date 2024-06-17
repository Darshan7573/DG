/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = ({ setShowLogin }) => {

    const { onsent, recentPrompt, showResult, loading, setLoading, resultData, setInput, input, token, setToken, setPrevPrompt, setRecentPrompt, newChat } = useContext(Context)

    const [name, setName] = useState("to DG.ia")


    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        setPrevPrompt([])
        setRecentPrompt("")
    }


    return (
        <div className='main'>
            <div className='nav'>
                <img className='logo_image' src={assets.logo} alt='' />
                {!token ? <button onClick={() => setShowLogin(true)}>Sign Up</button> :
                    <div onClick={() => newChat()} className='navbar-profile'>
                        <img src={assets.user_icon} alt='' />
                        <ul className='nav-profile-dropdown'>
                            <li onClick={() => { logout(), newChat() }}>Log out</li>
                        </ul>
                    </div>}

            </div>
            <div className='main-container'>

                {!showResult ? (
                    <>
                        <div className='greet'>
                            <p><span>Welcome {name}</span></p>
                            <p className='greet-p2'>How can I assist?</p>
                        </div>
                        <div className='cards'>
                            <div className='card'>
                                <p>Explore the globe</p>
                                <img onClick={() => { window.location.href = "https://earth.google.com/web/" }} src={assets.compass_icon} alt='' />
                            </div>
                            <div className='card'>
                                <p>Settle a debate: how should you store bread?</p>
                                <img onClick={() => { window.location.href = "https://ideasai.com/" }} src={assets.bulb_icon} alt='' />
                            </div>
                            <div className='card'>
                                <p>Find YouTube videos with inspiring best man speeches</p>

                                <img onClick={() => { window.location.href = "https://www.youtube.com" }} src={assets.youtube_icon} alt='' />

                            </div>
                            <div className='card'>
                                <p>Improve the readability of the following code</p>
                                <img onClick={() => { window.location.href = "https://chatgpt.com/" }} src={assets.code_icon} alt='' />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className='result-title'>
                            <img src={assets.user_icon} alt='' />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='result-data'>
                            <img className='dg-icon' src={assets.dgicon} alt=' ' />
                            {loading ?
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                )}



                <div className='main-bottom'>
                    <div className='search-box'>
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt='' />
                            <img src={assets.mic_icon} alt='' />

                            {input ? <img onClick={() => onsent()} src={assets.send_icon} alt='' /> : ""}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        DataGuru may display inaccurate info, including about people, so double-check its responses. Your privacy and DataGuru Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;
