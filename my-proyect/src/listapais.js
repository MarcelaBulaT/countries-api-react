import React, { useEffect, useState}from 'react';
import styled from 'styled-components';
import Country from './country'

const ListaPaisStyled= styled.div`
display: grid;
grid-row-gap: 2.3em;
grid-auto.flow: columns;
grid-template-columns: repeat(auto-fill, minMax(0, 200px));
background: var(--fondo);
justify-content: center;
padding: 4em 2em;   
`;
function ListaPais(){
    const [ListaPais, setListapais]= useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then((response) =>{
            return response.json()
        })
        .then((data)=>{
            setListapais(data)
            console.log(data)
        })
        .catch(()=>{
            console.log('Error')
        })
    }, [])
    return(
        <ListaPaisStyled>
            {
                ListaPais.map(({name, flag, population, region, capital,})=>{
                    return(
                        <Country 
                        flag={flag}
                        name={name}
                        population={population}
                        region={region}
                        capital={capital}
                        />   
                    )
                })
            }
        
        </ListaPaisStyled>
    )
}

export default ListaPais