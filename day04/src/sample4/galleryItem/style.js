import styled from 'styled-components';

export const GalleryItemContainer = styled.article`
    margin-bottom: 40px;
    box-shadow: 5px 5px 10px #efefef;
    padding: 15px 15px 35px;
    border: 1px solid #efefef;
    img {
        width: 100%;
    }
    h3 {
        font-size: 25px;
        color: hotpink;
        margin-bottom: 15px;
        text-transform: uppercase;
    }
    ul {
        margin-bottom: 20px;
        li {
            margin-bottom: 5px;
        }
    }
    p {
        span {
            display: inline-block;
            padding: 3px 20px;
            border-radius: 15px;
            background: #efefef;
            margin-right: 5px;
        }
    }
`;
