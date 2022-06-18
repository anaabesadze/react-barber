import styled from "styled-components"

export const Navbar = styled.div`
    width: 100%;
    padding: 20px 10px;
    background-color: #ABB2B9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    Link {
        
        text-decoration: none;
        color: black;
    }

    ul {
        list-style: none;
        display: flex;
        column-gap: 10px;
        color: #5F5F5F;

        li:hover {
            cursor: pointer;
            color: black;
        }
    }
`