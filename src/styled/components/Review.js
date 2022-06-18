import styled from "styled-components"

export const Review = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    backdrop-filter: blur(2px);
    top: -78px;
    
    div {
        width: 300px;
        height: 300px;
        background-color: #eefff8;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 14px;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
    }

    button {
        border-radius: 14px;
        color: #fff;
        padding: 5px 10px;
        border: none;
        background-color: #0de6fd;
    }

    button:last-child {
        background-color: #0CB467;
    }
    
`