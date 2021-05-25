
import React from 'react';

import SwapiService from '../../services/swapi-service'

import './starship-info.css';

export default class StarshipInfo extends React.Component {

    swapiService = new SwapiService();

    state={
        id: null,
        name: null,
        model: null,
        length: null,

    };

    constructor(){
        super();
        this.updatePerson();
    }

    updatePerson(){
        const id = 10;
        this.swapiService
            .getStarship(id)
            .then((starship)=>{
                this.setState({
                    id,
                    name: starship.name,
                    model: starship.model,
                    length: starship.length,
                })
            })
    }


    render(){
        const {id, name, model, length} = this.state;
        return(
            <div className="personInfoWrapper">
                <img className="personImage" src="#" alt="Man"/>
                <div className="personInfo">
                    <h3>{name}</h3>
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}/>
                    <ul>
                        <li>
                            <span>{model}</span>
                        </li>
                        <li>
                            <span>{length}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    };
    
};

