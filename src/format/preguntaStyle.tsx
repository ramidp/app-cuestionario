import styled from "styled-components";

const Container = styled.div`
width: 50vw;
height: 50vh;
background-color: white;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
padding: 20px;
    @media (max-width: 1000px) {
        width: 80vw;
    }

    form {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        h1 {
            font-size: 20px;
            width: 70%;
        }
        label {
            font-size: 15px;
        }


        .reply-div {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
    
            .ind-reply {
                text-align: center;
                width: 70%;
                display: flex;
                justify-content: space-between;
                    .radio-check {
                        width: 15px;
                        height: 15px;
                        border: 1px solid green;
                        background-color: white;
                        cursor: pointer;
                            &:hover {
                                filter: contrast(70%);
                            }
                        }
                        .active {
                            width: 15px;
                            height: 15px;
                            border: 1px solid green;
                            background-color: green;
                            cursor: pointer;    
                            &:hover {
                                filter: contrast(70%);
                            }
                        }
            }
        }
        
        .nav {
            display: flex;
            justify-content: space-around;
            width: 100%;
            background-color: #27cf27;
            padding: 10px 0;
            a {
                color: white;
                font-size: 14px;
                text-decoration: none;
                padding: 5px;
                &:hover {
                    padding: 5px;
                    font-weight: 700;
                }
            }
        }
}
`
export default Container