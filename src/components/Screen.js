import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    border: 1px solid black;
    @media(max-width: 600px){
        display: flex;
        justify-content: center;
    }
`;

export default function Screen(props) {

    return (
        <StyledContainer className="screen">
            {props.screenContent}
        </StyledContainer>
    );

}