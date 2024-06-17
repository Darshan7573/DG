/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from "../../assets/assets"
import { Context } from '../../context/Context'

const Sidebar = () => {


    const [extented, setExtented] = useState(false)
    const { onsent, prevPrompt, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onsent(prompt)
    }

    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick={() => setExtented(prev => !prev)} className='menu' src={assets.menu_icon} alt='' />
                <div onClick={() => newChat()} className='new-chat'>
                    <img src={assets.plus_icon} />
                    {extented ? <p>New chat</p> : null}
                </div>
                {extented ?
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        {prevPrompt.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} key={index} className='recent-entry'>
                                    <img src={assets.message_icon} alt='' />
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                            )
                        })}

                    </div>
                    : null}
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon} alt='' />
                    {extented ? <p> Help</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon} alt='' />
                    {extented ? <p> Activity</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon} alt='' />
                    {extented ? <p> Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar