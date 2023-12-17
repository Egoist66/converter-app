import { useEffect } from "react";

const ExchangePlace = () => {
    console.log('effect');
    useEffect(() => {
        document.title = "Пункты обмена"
    }, [])

    const style = ".map-container {padding: 0px !important; height: 100vh}"
    return (
        <div>
            <style>
                {style}
            </style>
            <div style={{position:"relative", overflow: "hidden"}}>
                <a href="https://yandex.by/maps/157/minsk/search/%D0%9E%D0%B1%D0%BC%D0%B5%D0%BD%20%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D1%8B/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:12, position:"absolute", top:0}}>Обмен валюты в Минске</a>
                <a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps" 
                style={{color:"#eee", fontSize:12, position:"absolute", top:14}}>Минск</a>
                <iframe src="https://yandex.by/map-widget/v1/?display-text=%D0%9E%D0%B1%D0%BC%D0%B5%D0%BD%20%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D1%8B&ll=27.548428%2C53.918142&mode=search&sctx=ZAAAAAgBEAAaKAoSCXmu78NBjjtAES%2F6CtKM80pAEhIJTl5kAn6N3z8RnIpUGFsIxj8iBgABAgMEBSgKOABA9Z4GSAFqAnVhnQHNzEw9oAEAqAEAvQE%2F99bEwgGMAd%2BisoAFsciM4QOhzcz6BPPhwvnXBt2dxO4Ep4Sys%2FAC2b2Z5wS22bbX%2FALz6K761wSN%2B5uGBJaMhNrEBpmyqsejBo2Ot%2B%2FVAf6E%2BoSxBNDapbQEopytwknrxuXJ1gH8qdmU%2BQKkidL%2BBL6tyqMbou2x8OMDza2C0poG7f6wpu8G9tuT0tcC6dGymbcG6gEA8gEA%2BAEAggIbKChjYXRlZ29yeV9pZDooMTg0MTA1NDA2KSkpigIJMTg0MTA1NDA2kgIAmgIMZGVza3RvcC1tYXBzqgKPATQ4MDA4NTY0MjMxLDQ1OTEwNjY4MDcsMzEzNjc1MTA3NDEsMTkwNTEyNjM4MjU0LDQ3OTQ2OTM1ODk2LDE4MjE1ODI1MDM5OSw0ODE3NzM2ODQ0Niw0MzU5NzMyMDU0OCwxODg0NzM0MjUzNTksNDUzMTcyNDU3OSwzNjcyMTI1MzYzOSw0NTkyODUxOTA4&sll=27.548428%2C53.918142&sspn=0.081317%2C0.028380&text=%7B%22text%22%3A%22%D0%9E%D0%B1%D0%BC%D0%B5%D0%BD%20%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D1%8B%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184105406%22%5D%7D%5D%7D&z=14.6"  width="560" height="400" frameBorder="1" allowFullScreen={true} style={{position: "relative"}}></iframe>
            </div>
        </div>
    );
}

export default ExchangePlace;
