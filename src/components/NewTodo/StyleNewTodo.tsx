
import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const Input = styled.input`
    padding: 12px 1rem;
    border-radius: 10px;
    border: 1px solid #fff;
    background: #000;
    color: #fff;
    cursor: pointer;
 
    &:focus-visible {
        outline: 0;
    }
`;
export const SubmitButton = styled.button`
    margin: 1rem auto;
    padding: 9px 2rem;
    border-radius: 10px;
    background: #fff;
    font-size: 19px;
    background: #000;
    color: #fff;
    border: 1px solid #000;
    cursor: pointer;
    transition: border 0.2s ease-in-out;

    &:hover {
        border: 1px solid #fff;
    }
`;

export const Error = styled.p`
    text-align: center;
    font-size: 14px;
    color: #ee5a5a;
`;