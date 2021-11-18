import styled, { css } from "styled-components";
export const StyledSpacing = styled.div`
    margin: 40px 0;
`;
export const StyledPostHeading = styled.span`
    color: white;
    padding: 6px 14px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    font-weight: 600;
    ${(props) =>
        props.latest &&
        css`
            background-color: #ec0000;
        `}
    ${(props) =>
        props.list &&
        css`
            background-color: #1e88e5;
        `}
        ${(props) =>
        props.sidebar &&
        css`
            background-color: black;
        `}
        ${(props) =>
        props.sport &&
        css`
            background-color: #ff7a09;
        `}
        ${(props) =>
        props.health &&
        css`
            background-color: #00bdb3;
        `}
        ${(props) =>
        props.education &&
        css`
            background-color: #9401d3;
        `}
`;
export const StyledPostLine = styled.hr`
    height: 4px;
    opacity: 1;
    ${(props) =>
        props.latest &&
        css`
            color: #ec0000;
            border-bottom: 2px dotted #ec0000;
        `}
    ${(props) =>
        props.list &&
        css`
            color: #1e88e5;
            border-bottom: 2px dotted #1e88e5;
        `}
        ${(props) =>
        props.sidebar &&
        css`
            color: black;
            border-bottom: 2px dotted black;
        `}
        ${(props) =>
        props.sport &&
        css`
            color: #ff7a09;
            border-bottom: 2px dotted #ff7a09;
        `}
        ${(props) =>
        props.health &&
        css`
            color: #00bdd3;
            border-bottom: 2px dotted #00bdd3;
        `}
        ${(props) =>
        props.education &&
        css`
            color: #9401d3;
            border-bottom: 2px dotted #9401d3;
        `}
`;
export const StyledPostCategory = styled.span`
    color: white;
    padding: 2px 4px;
    font-size: 12px;
    border-radius: 4px;
    ${(props) =>
        props.feature &&
        css`
            background-color: #ec0000;
            position: absolute;
            top: 5%;
            left: 5%;
        `}
    ${(props) =>
        props.latest &&
        css`
            position: absolute;
            top: 5%;
            left: 5%;
            background-color: #ec0000;
        `}
        ${(props) =>
        props.list &&
        css`
            position: absolute;
            top: 10%;
            left: 10%;
            background-color: #1e88e5;
        `}
        ${(props) =>
        props.sidebar &&
        css`
            position: absolute;
            top: 10%;
            left: 10%;
            background-color: black;
        `}
`;
export const StylePostImageWrapper = styled.div`
    overflow: hidden;
    border-radius: 6px;
    position: relative;
`;
export const StyledPostImage = styled.img`
    &:hover {
        transform: scale(1.2);
    }
    object-fit: cover;
    transition: all 0.25s ease-in-out;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    ${(props) =>
        props.latest &&
        css`
            width: 100%;
            height: 100%;
            max-height: 280px;
        `}
`;
export const StyledPostTitle = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    margin: 10px 0;
    font-weight: 600;
    & > a {
        color: black;
        text-decoration: none;
        transition: all 0.25s ease-in-out;
        &:hover {
            color: #ec0000;
        }
    }
`;
export const StyledPostDescription = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    & > * {
        text-decoration: none;
        color: black;
    }
`;
export const StyledFeaturedPostCol = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 220px);
    width: 100%;
    max-height: 440px;
    gap: 5px;
    margin: 60px 0;
    & > div > div > div > a {
        color: white;
    }
    @media (max-width: 992px) {
        display: flex;
        flex-direction: column;
        margin-top: 140px;
        & > :not(:first-child) {
            display: none;
        }
    }
    & > :first-child {
        position: relative;
        grid-column: 1/4;
        grid-row: 1/3;
        & > div > a > img {
            height: 445px;
        }
        & > div > div > a {
            font-size: 22px;
        }
    }
    & > :nth-child(2) {
        grid-row: 1/2;
        grid-column: 4/6;
        position: relative;
        & > div > div > a {
            font-size: 19px;
        }
        & > div > a > img {
            height: 220px;
        }
    }
    & > :nth-child(3),
    & > :nth-child(4) {
        grid-row: 2/3;
        position: relative;
        & > div > div > a {
            font-size: 16px;
        }
        & > div > a > img {
            height: 220px;
        }
    }
`;
export const StyledPostBlockList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    max-height: 480px;
    gap: 15px;
    @media (max-width: 992px) {
        margin-bottom: 80%;
    }
    @media (max-width: 768px) {
        margin-bottom: 110%;
    }
    & > div {
        width: 100%;
    }
    & > div:first-child {
        grid-row: 1/5;
        @media (max-width: 992px) {
            grid-column: 1/3;
            margin-bottom: 80%;
        }
        @media (max-width: 768px) {
            margin-bottom: 110%;
        }
        & > div:first-child {
            height: 240px;
            @media (max-width: 992px) {
                height: 360px;
            }
        }
        & > div:last-child {
            & > div:first-child {
                font-size: 18px;
            }
        }
        & > div > p > a > h2 {
            font-size: 14px;
            line-height: 24px;
        }
        & > div > p > a > h2 > * {
            font-weight: normal;
        }
    }
    & > div:not(:first-child) {
        display: flex;
        height: 80px;
        gap: 10px;
        @media (max-width: 992px) {
            grid-column: 1/3;
            height: 100px;
        }
        & > div > p {
            display: none;
        }
        & > div:first-child {
            width: 30%;
            @media (max-width: 992px) {
                width: 20%;
            }
            & > span {
                display: none;
            }
        }
        & > div:last-child {
            width: 75%;
            font-size: 14px;
        }
    }
`;
export const StyledPostBlockSidebar = styled.div`
    width: 100%;
    @media (max-width: 992px) {
        margin-bottom: 40px;
    }
    & > div {
        margin-bottom: 20px;
    }
    & > :first-child {
        position: relative;
        & > div:first-child > span {
            position: absolute;
            top: 45%;
            left: 3%;
        }
        & > div:last-child > div:last-child {
            transform: translateY(40%);
        }
        & > div:last-child > div:last-child > div {
            background-color: rgb(177, 176, 176);
            border-radius: 4px;
            padding: 2px 6px;
            &:hover {
                background-color: #ec0000;
                & > ion-icon {
                    color: white;
                }
            }
        }
        & > div > a > img {
            height: 240px;
            @media (max-width: 992px) {
                height: 360px;
            }
        }
        & > div > div {
            position: absolute;
            bottom: 10%;
            padding: 10px;
            & > a {
                color: white;
                font-size: 18px;
            }
            & > div {
                color: white;
            }
        }
    }
    & > :not(:first-child) {
        display: flex;
        height: 80px;
        gap: 10px;
        & > :first-child {
            width: 30%;
            @media (max-width: 992px) {
                width: 20%;
            }
            & > span {
                display: none;
            }
        }
        & > :last-child {
            width: 70%;
        }
    }
`;
export const StyledThreePostBlock = styled.div`
    width: 100%;
    @media (max-width: 992px) {
        margin-bottom: 40px;
    }
    & > div {
        margin-bottom: 20px;
    }
    & > :first-child {
        position: relative;
        & > div:first-child > span {
            position: absolute;
            top: 45%;
            left: 3%;
        }
        & > div:last-child > div:last-child {
            transform: translateY(40%);
        }
        & > div:last-child > div:last-child > div {
            background-color: rgb(177, 176, 176);
            border-radius: 4px;
            padding: 2px 6px;
            &:hover {
                background-color: #ec0000;
                & > ion-icon {
                    color: white;
                }
            }
        }
        & > div > a > img {
            height: 240px;
            @media (max-width: 992px) {
                height: 360px;
            }
        }
        & > div > div {
            position: absolute;
            bottom: 10%;
            padding: 10px;
            & > a {
                color: white;
                font-size: 18px;
            }
            & > div {
                color: white;
            }
        }
    }
    & > :not(:first-child) {
        display: flex;
        height: 80px;
        gap: 10px;
        & > :first-child {
            width: 30%;
            @media (max-width: 992px) {
                width: 20%;
            }
            & > span {
                display: none;
            }
        }
        & > :last-child {
            width: 70%;
        }
    }
`;
export const StyledSportCategory = styled.div`
    & > div > div > div > span {
        background-color: #ff7a09;
    }
`;
export const StyledHealthCategory = styled.div`
    & > div > div > div > span {
        background-color: #00bdb3;
    }
`;
export const StyledEducationCategory = styled.div`
    & > div > div > div > span {
        background-color: #9401d3;
    }
`;
export const StyledPostMore = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    & > * {
        whitespace: nowrap;
    }
`;
export const StyledPostContent = styled.div`
    ${(props) =>
        props.feature &&
        css`
            position: absolute;
            bottom: 5%;
            left: 5%;
            z-index: 10;
            color: white;
        `}
`;
export const StyledPostAuthor = styled.div`
    margin-right: 10px;
    transition: all 0.25s linear;
    display: flex;
    align-items: center;
    cursor: pointer;
    & > span {
        whitespace: nowrap;
    }
    ${(props) =>
        props.normal &&
        css`
            & > ion-icon {
                color: #ec0000;
                margin-right: 5px;
            }
        `}
    ${(props) =>
        props.background &&
        css`
            background-color: rgb(177, 176, 176);
            border-radius: 4px;
            padding: 2px 6px;
            &:hover {
                background-color: #ec0000;
                & > ion-icon {
                    color: white;
                }
            }
            & > ion-icon {
                color: #ec0000;
                margin-right: 5px;
            }
        `}
`;

export const StyledPostTime = styled.div`
    transition: all 0.25s linear;
    display: flex;
    align-items: center;
    cursor: pointer;
    ${(props) =>
        props.normal &&
        css`
            & > ion-icon {
                color: #ec0000;
                margin-right: 5px;
            }
        `}
    ${(props) =>
        props.background &&
        css`
            background-color: rgb(177, 176, 176);
            border-radius: 4px;
            color: white;
            padding: 2px 6px;
            &:hover {
                background-color: #ec0000;
                & > ion-icon {
                    color: white;
                }
            }
            & > ion-icon {
                color: #ec0000;
                margin-right: 5px;
            }
        `}
`;
export const StyledPostContainer = styled.div`
    height: 100vh;
`;
export const StyledPostTable = styled.div`
    width: 90%;
    margin-top: 150px;
    height: 750px;
    margin-left: 5%;
    position: relative;
`;
export const StyledPostHeader = styled.div`
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    margin: 20px 0;
`;
export const StyledButton = styled.i`
    font-size: 16px;
    cursor: pointer;
    ${(props) =>
        props.update &&
        css`
            color: #ffc107;
        `}
    ${(props) =>
        props.delete &&
        css`
            color: #dc3545;
        `}
`;
export const StyledPostAddButton = styled.div`
    margin-bottom: 20px;
    & > a:hover {
        color: white;
    }
`;
export const StyledNoPostFound = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > p {
        margin: 20px;
    }
`;
