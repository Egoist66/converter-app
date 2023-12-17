import {memo, useEffect, useState} from "react"
import uuid from "react-uuid"

const Calculator = ({sellBuyData}) => {


    const [rate, setRate] = useState('')
    const [sortedCurrArr, setSortedCurrArr] = useState([])
    const [state, setState] = useState({
        action: "buy",
        currency: "",
        value: "",
        result: 0,
        selected: "Выберите валюту"


    })

    const {action, currency, result, value} = state;

    useEffect(() => {
        const currArray = []
        sellBuyData.map(item => {
            currArray.push(item.sellIso)

        })

        const sortedCurrArr = Array.from(new Set(currArray));
        setSortedCurrArr(sortedCurrArr)

        console.log(sellBuyData)

    }, [sellBuyData])

    const handleChangeAction = e => {
        setState({
            ...state,
            action: e.target.value
        })


    }


    const handleChangeValue = (e) => {
        if (value.length <= 0) {
            setState({
                ...state,
                value: e.target.value,
                result: 0
            })
        } else {
            setState({
                ...state,
                value: e.target.value,

            })

        }


    }

    const handleChangeCurrencySelect = (e) => {

        setState({
            ...state,
            currency: e.target.value,

        })


    }


    const handCalcResult = () => {

        switch (action) {
            case "buy":
                if (currency === "EUR") {
                    setState({
                        ...state,
                        result: +value * Number(rate),
                    })


                } else if (currency === "USD") {
                    setState({
                        ...state,
                        result: +value * Number(rate),

                    })

                } else if (currency === "RUB") {
                    setState({
                        ...state,
                        result: +value * Number(rate) / 100,
                    })

                }
                break;

            case "sell":
                if (currency === "EUR") {
                    setState({
                        ...state,
                        result: +value * Number(rate),
                    })
                } else if (currency === "USD") {
                    setState({
                        ...state,
                        result: +value * Number(rate),
                    })
                } else if (currency === "RUB") {
                    setState({
                        ...state,
                        result: +value * Number(rate) / 100,
                    })
                }
                break;
        }

    }


    return (
        <div className="calculator-wrapper">

            <div className="calculator info-card">

                <p style={{paddingBottom: 30, fontWeight: 600}}>Я хочу:</p>

                <div className="options">

                    <div onChange={handleChangeAction} className="radio-option">

                        <div className="controls">

                            <label htmlFor="buy">купить</label>
                            <input defaultValue="buy" defaultChecked type="radio" name="action" id="buy"/>
                        </div>
                        <div className="controls">

                            <label htmlFor="sell">продать</label>
                            <input defaultValue="sell" type="radio" name="action" id="sell"/>


                        </div>

                    </div>

                    <div className="controls">

                        <input onChange={(e) => setRate(e.currentTarget.value)} id="quantity" value={rate}
                               placeholder={'Введите курс валюты'}
                               name="quantity"/>

                        <input min={0} onChange={handleChangeValue} id="quantity" value={value}
                               placeholder={value.length <= 0 ? "Введите сумму" : "Обработка"} step={100}
                               name="quantity" type="number"/>
                        <select value={currency} onChange={handleChangeCurrencySelect} name="currencies"
                                id="currencies">
                            <option defaultValue="Выберите валюту">Выберите валюту</option>

                            {sortedCurrArr.map((item, i) => {
                                return (

                                    <option key={uuid()} value={item}>{item}</option>

                                )

                            })}

                        </select>

                    </div>


                    <button onClick={handCalcResult} disabled={value.length <= 0}
                            style={{display: "block"}}>Рассчитать
                    </button>

                </div>

                <p style={{paddingBottom: 30, fontWeight: 600}}>Результат:</p>
                <p><textarea readOnly value={value.length <= 0 ? "0 BYN" : `${result} BYN`} name="result"
                             id="result"></textarea></p>


            </div>


        </div>
    )
}

export default memo(Calculator)