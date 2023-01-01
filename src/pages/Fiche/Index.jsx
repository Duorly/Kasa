import './fiche.css'
import {Main} from "../../layouts/Main";
import {Slideshow} from "../../components/Slideshow";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const Fiche = () => {

    const params = useParams()

    const [logement, setLogement] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/logements.json`)
            .then((response) => response.json()
                .then((res) => {
                    const data = res.filter(logement => logement.id === params.id)
                    setLogement(data[0])
                })
                .catch((error) => console.log(error))
            )
    }, [params.id])
    return (
        <Main>
            <Slideshow logement={logement}></Slideshow>
        </Main>
    );
}