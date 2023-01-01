import {Main} from "../../layouts/Main";
import './home.css';
import {Banner} from "../../components/Banner";
import {useEffect, useState} from "react";
import {Card} from "../../components/Card";

export const Home = () => {
    const [logements, setLogements] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/logements.json`)
            .then((response) => response.json()
                .then((data) => {
                    setLogements(data)
                })
                .catch((error) => console.log(error))
            )
    }, [])
    return (
        <Main>
            <Banner></Banner>
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