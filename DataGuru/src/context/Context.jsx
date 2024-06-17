/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createContext, useEffect, useState } from "react";
import run from "../config/DataGuru";


export const Context = createContext()


const ContextProvider = (props) => {

    const [input, setInput] = useState("")
    //to save the input
    const [recentPrompt, setRecentPrompt] = useState("")
    // to save the history and display in recent
    const [prevPrompt, setPrevPrompt] = useState([])
    //hiddes the cards
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setresultData] = useState("")

    const url = "https://dg-vttc.onrender.com"
    //this token is coming from login.jsx file from axios
    const [token, setToken] = useState("")

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setresultData(nextWord)
        }, 75 * index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    const onsent = async (prompt) => {
        setresultData("")
        setLoading(true)
        setShowResult(true)


        let response;
        if (prompt !== undefined) {
            response = await run(prompt)
            setRecentPrompt(prompt)
        }
        else {
            setPrevPrompt(prev => [...prev, input])
            setRecentPrompt(input)
            response = await run(input)
        }
        let responseArray = response.split("**")
        let newResponse = " ";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            }
            else {
                newResponse += "<b>" + responseArray[i] + "</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ")
        let concatenatedResponse = ""
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            concatenatedResponse += nextWord + " "
            delayPara(i, concatenatedResponse)
        }
        setLoading(false)
        setInput("")
    }



    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
    }, [])

    const contextValue = {
        prevPrompt, setPrevPrompt, onsent, setRecentPrompt, recentPrompt, showResult, setShowResult, resultData, setresultData, loading, setLoading, input, setInput, newChat, url, token, setToken
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider