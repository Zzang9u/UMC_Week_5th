import styled from "styled-components";

export const MvContainer = styled.div`
        width: 160px;
        background-color: #373B69;
        height: 310px;
        margin: 8px;
        border-radius: 2px;
`;

export const Incontent = styled.div`
        display: ${(props) => (props.active ? "block" : "none")};

        max-width: 9.9%;
        max-height: 60%;
        height: 310px;
        position: absolute;
        color: #c7c7c7;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 13px;
        background-color: rgba(0,0, 0, 0.7);
        overflow: hidden;
        text-overflow: ellipsis;

        & span {
                padding-top: 10px;
                color: white;
                font-size: small;
        }

        & h4 {
                color: white;
                font-size: x-small;
                word-spacing: -1px;
        }
`;

export const MvInfo = styled.div`
        display: flex;
        margin-top: -4em;
        padding: 10px;
        justify-content: space-between;

        & h4 {
                color: white;
                font-size: x-small;
                word-spacing: -1px;
        }

        & span {
                padding-top: 10px;
                color: white;
                font-size: small;
        }
`;

export const Img = styled.div`
        width: 160px;
        height: 310px;
        background-position: 100%;

        & img {
        width: 100%;
        height: 77.6%;
        object-fit: fill;
        position: inherit;
        }
        
`;