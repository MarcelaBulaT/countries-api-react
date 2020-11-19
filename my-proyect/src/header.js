import React from 'react';
import styled from 'styled-components';


const HeaderStyled = styled.div`
background: var(--blanco);
margin-bottom: 1em;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.06);
.contenedor{
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.noche{
    i{
        transform: rotate(-25deg);
        margin-right: 15px;
    }  
}
h1{
    font-size: 14px;
}
p{
    font-size: 12px;
}

`;

function Header() {
    function CambioClick(){

    }
    return (
        <HeaderStyled> 
            <div className="contenedor">
            <h1> Where in the world?</h1>
            <div className="noche">
            <p onClick="CambioClick">
            <i class="far fa-moon"></i>
             Dark Mode
             </p>
            </div>
            </div>  
        </HeaderStyled>
    )
}
export default Header