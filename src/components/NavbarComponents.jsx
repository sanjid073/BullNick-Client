import styled from "styled-components";

export const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    ul{
        display: flex;
        gap: 18px;
        margin-right: auto;
        align-items: center;
        a{
            display: flex;
            align-items: center;
            text-decoration: none;
            gap: 10px;
            font-size: 1.2rem;
            position: relative;
            ul{
                position: absolute;
                top: 90%;
                background: #fff;
                border-radius: 5px;
                box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                width: 300px;
                left: -10px;
                display: none;
                li{
                    display: block;
                    width: 100%;
                    a{
                        display: block;
                        padding: 20px;
                        text-decoration: none;
                        &:hover{
                            background: #f5f5f5;
                        }
                    }
                }
            }
            &:hover{
                ul{
                    display: block;
                }
            }
        }

        @media (max-width: 768px) {
            display: none;
        }
    }

    .flag{
        display: flex;
        margin-left: auto;
        gap: 15px;
        div{
            display: flex;
            align-items: center;
            gap: 10px;
        }
        button{
            font-size: 1.2rem;
            padding: 10px;
        }
        .black-btn{
            background: #000;
            color: #fff;
            border-radius: 10px;
            padding: 10px 20px;
            &:hover{
                background: #333;
            }
        }
    }
`;