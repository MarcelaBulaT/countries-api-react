import React from 'react';
import styled from 'styled-components';
import Diseño from './diseño';

const HeaderStyled = styled.div`
background: var(--blanco);
display: flex;
justify-content: space-between;
`;

function Header() {
    function CambioClick(){

    }
    return (
        <HeaderStyled>
            <Diseño>
            <div className="contenedor">
            <p> Where in the world?</p>
            <div className="noche">
            <p onClick="CambioClick">
            <i class="far fa-moon"></i>
             Dark Mode
             </p>
            </div>
            </div>
            </Diseño>
        </HeaderStyled>
    )
}
export default Header