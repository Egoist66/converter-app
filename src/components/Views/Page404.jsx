import { useEffect } from "react";

const Page404 = () => {
    console.log('effect');
    useEffect(() => {
        document.title = "Страница 404"
    }, [])


    return (
        <div>
            <h1>Страница 404</h1>
        </div>
    );
}

export default Page404;