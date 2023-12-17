import { useEffect } from "react";

const Contacts = () => {
    console.log('effect');
    useEffect(() => {
        document.title = "Контакты"
    }, [])

    const style = ".contacts-container {margin: 0px !important; max-width: initial !important} .app-section-content {padding: 0px !important}"

    return (
       
        <div>
            <style>{style}</style>
            <iframe src="https://myfin.by/banki" frameBorder="0"></iframe>
        </div>
    );
}

export default Contacts;
