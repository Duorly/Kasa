import {Main} from "../../layouts/Main";
import './home.css';
import banner from "../../assets/images/banner.jpeg"
import {Banner} from "../../components/Banner";
import {useEffect, useState} from "react";
import {Card} from "../../components/Card";


export const Home = () => {

    const [logements, setLogements] = useState([])

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/logements.json`)
            .then((response) => response.json()
                .then((data) => {
                    setLogements(data)
                })
                .catch((error) => console.log(error))
            )
    }, [])

    return (
        <Main>
            <Banner
                bg={banner} title="Chez vous, partout et ailleurs"></Banner>

            <div className="cards">
                {logements.map((logement) => {
                    return (
                        <Card key={`${logement.id}`} logement={logement}/>
                    )
                })}
            </div>
        </Main>
    );
}