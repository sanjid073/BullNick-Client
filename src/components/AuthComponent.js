import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 70% 40%;
    grid-gap: 1rem;
    div{
        padding: 1rem;
    }
    @media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const FullWidth = styled.div`
    width: 100%;
`;


export const SignupTextGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
`;

export const SignupTextGridItem = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-gap: 1rem;
    div{
        font-size: 1.2rem;
    }
    @media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const SmallCenterText = styled.p`
    text-align: center;
    font-size: 1rem;
`;

export const LinkText = styled.p`
    text-align: center;
    font-size: 2rem;
    color: #171C2A;
    margin: 2rem;
    cursor: pointer;
`;


export const InputItem = styled.span`
    display:block;
    margin: 1rem 0;
    label{
        display: block;
        margin-bottom: 0.5rem;
    }
    input{
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        font-size: 1rem;
        &:focus{
            outline: none;
        }
    }
`;

export const BlackBlockButton = styled.button`
    background-color: #171C2A;
    color: #fff;
    padding: 0.8rem;
    margin: 1rem 0;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
    &:hover{
        background-color: #171C4A;
        color: #fff;
    }
`;