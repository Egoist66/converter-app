import { useEffect, useMemo } from "react";
import uuid from "react-uuid";
import Calculator from "../Calculator/Calculator";

import { useState} from "react";

import axios from "axios";

//https://developerhub.alfabank.by:8273/partner/1.0.1/public/rates
const Home = () => {

    const [state, setState] = useState({
        currencyData: [],
        sellBuyData : []
        
    })

    const {currencyData, sellBuyData} = state;

   

    const getCurrencyData = async (url) => {
        const request = await axios.get(url);
        const {data} = request;

        
        return data; 
    }

  
    
    const handleStateCurrencyData = async () => {

        const data = await getCurrencyData('https://www.nbrb.by/api/exrates/rates?periodicity=0');

       
        setState((state) => {
            return {
                ...state,
                currencyData: [...state.currencyData, ...data]
            }
        })

        
        
       
    }

    const handleStateBuySellCurrData = async () => {

        const data = await getCurrencyData('https://developerhub.alfabank.by:8273/partner/1.0.1/public/rates');

        setState((state) => {
            return {
                ...state,
                sellBuyData: [...state.sellBuyData, ...data.rates]
            }
        })

       

        
    }

    useEffect(() => {
        handleStateCurrencyData();
        handleStateBuySellCurrData();
        
        document.title = "Главная";
    }, [])

    console.log('render');

    return (
        
        <div className="info-wrapper">
            <h2>Курс валют НБРБ на {new Date().toLocaleDateString()}</h2>

            <div className="info-card-panel">

                {currencyData.map((item) => {
                    return (
                        <div key={uuid()} className="info-card">
                            
                            <p className="currency">{item.Cur_Abbreviation}</p>
                            <p className="rate">{item.Cur_Scale} {item.Cur_Name} = <span>{item.Cur_OfficialRate} BYN</span></p>

                        </div>
                    )
                })}

            </div>

            <h2>Калькулятор Обмена</h2>

            <Calculator sellBuyData={sellBuyData} />

        </div>
    );
}

export default Home;