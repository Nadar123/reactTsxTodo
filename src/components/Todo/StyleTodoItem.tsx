import styled from 'styled-components';

export const Item = styled.li`
background: #303234;
border-radius: 10px;
padding: 1rem;
margin: 0 0 1rem 0;
 display: flex;
 justify-content: space-between;

`;
export const RemoveItem = styled.span`
font-size: 12px;
line-height: 25px;
cursor: pointer;
&:hover {
 color: red
}
`;