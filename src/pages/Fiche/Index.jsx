import './fiche.css'
import {Main} from "../../layouts/Main";
import {Slideshow} from "../../components/Slideshow";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Tag} from "../../components/Tag";
import {Collapse} from "../../components/Collapse";

export const Fiche = () => {

    const params = useParams()

    const [logement, setLogement] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/logements.json`)
            .then((response) => response.json()
                .then((res) => {
                    const data = res.filter(logement => logement.id === params.id)
                    setLogement(data[0])
                    console.log(logement)
                })
                .catch((error) => console.log(error))
            )
    }, [logement, params.id])

    const stars = [];

    for (let i = 1; i <= logement.rating; i++) {
        stars.push(<i key={i} className="fa-solid fa-star fa-2x"></i>);
    }
    if (logement.rating < 5 && logement.rating > 0) {
        let notstars = 5 - logement.rating
        for (let i = 1; i <= notstars; i++) {
            stars.push(<i key={`${i}-notstars`} className="fa-regular fa-star fa-2x"></i>);
        }
    }

    return (
        <Main>
            <Slideshow logement={logement}></Slideshow>
            <div className="flex-between">
                <div className="group1">
                    <div className="logement-title">{logement.title}</div>
                    <div className="logement-location">
                        {logement.location}
                    </div>
                    <div className="logement-tags">
                        {logement.tags?.map((tag, i) => {

                            return (
                                <Tag key={`${i}-${tag.trim()}`} name={tag}/>
                            )
                        })}
                    </div>
                </div>

                <div className="logement-host">
                    <div className="logement-host1">
                        <div>{logement.host?.name}</div>
                        <img className="host-avatar" src={logement.host?.picture} alt={logement.host?.name}/></div>

                    <div className="logement-rating">
                        {stars.map((star) => (
                            star
                        ))}
                    </div>
                </div>
            </div>

            <div className="logement-collapse-group">

                <div className="logement-collapse">
                    <Collapse title="Description" content={logement.description}
                              open={true}></Collapse>
                </div>
                <div className="logement-collapse">
                    <Collapse title="Equipement" list={logement.equipments}
                              open={true}></Collapse>
                </div>
            </div>
        </Main>
    );
}