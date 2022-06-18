import styled from "styled-components"

export const Authorization = styled.div`
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border: 1px solid gray;
    background: rgb(226,226,226);
    background: linear-gradient(176deg, rgba(226,226,226,1) 0%, rgba(205,205,205,1) 35%, rgba(153,153,153,1) 100%);
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    h1 {
        text-align: center;
    }



    .form-group {
        width: 100%;
        margin-bottom: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;

        input { 
            width: 70%;
            padding: 5px;
            border-radius: 5px;
            border: 1px solid gray;
            outline: none;
        }

        input:focus,
        input:active {
            border: 1px solid blue;
        }
        

        input[type=submit] {
            border: none;
            background-color: #0de6fd;
            transition: all .3s ease;
        }

        input[type=submit]:hover {
            cursor: pointer;
            background-color: #00c5ff;
        }
    }

    .linkTo {
        display: flex;
        justify-content: center;
        align-items: center;

        span a {
            color: #00c5ff;
            text-decoration: underline;
        }

        span a:hover {
            cursor: pointer;
        }
    }


`