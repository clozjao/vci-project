import React, { useState, useEffect, useRef } from 'react';
import getToken from '../utils/getToken';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useDispatch, useSelector } from "react-redux";
import { SET_VCI_PRICE_RES } from "../actions/actionTypes";



const accessToken = getToken();
let ws;
export const apiVciPriceUpdate = (close, homePage) => {
    const dispatch = useDispatch();

    const baseURL = 'wss://api.uni247.xyz/api/app-order/'
    // const baseURL = 'wss://webapi.ckex.xyz/dev-f/app-order/'
    const wsUrl = `${baseURL}market-odds/?authorization=bearer%20${accessToken}`
    const [vciPriceWsRes, setVciPriceWsRes] = useState("");
    const wssUrlRef = useRef(null)

    useEffect(() => {
        if (homePage) {
            wssUrlRef.current = wsUrl
        }
    }, [JSON.stringify(homePage)]);

    let reconnect = {}

    const { sendMessage, lastMessage, readyState, getWebSocket } = useWebSocket(wssUrlRef.current, reconnect);

    useEffect(() => {
        if (ws?.url?.includes('authorization=bearer%20')) {
            reconnect = {
                shouldReconnect: (closeEvent) => {
                    /*
                      useWebSocket will handle unmounting for you, but this is an example of a 
                      case in which you would not want it to automatically reconnect
                    */
                    // return didUnmount.current === false;
                    return true
                },
                reconnectAttempts: 10,
                reconnectInterval: 3000,
            }
        }
    }, [ws?.url]);

    useEffect(() => {
        if (readyState === ReadyState.OPEN) {
            ws = getWebSocket()

            // if (event_id) {
            //     sendMessage(JSON.stringify({
            //         commend: event_id.toString()
            //     }));
            //     ws = getWebSocket()
            // }
        }
    }, [JSON.stringify(readyState)
        // , JSON.stringify(event_id)
    ]);

    useEffect(() => {
        if (lastMessage) {
            if (lastMessage.data === "{}") return
            setVciPriceWsRes(JSON.parse(lastMessage.data))
            dispatch({
                type: SET_VCI_PRICE_RES,
                payload: JSON.parse(lastMessage.data),
              });
        }
    }, [lastMessage]);

    if (close) {
        ws?.close();
        ws = undefined;
        wssUrlRef.current = null;
    }

    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden') {
            // getWebSocket()?.close(1000, 'invisible')
        }
    });
    return { vciPriceWsRes, ws };
}