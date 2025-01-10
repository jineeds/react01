import styled from 'styled-components';

export const GalleryFormContainer = styled.form`
    padding: 30px;
    text-align: center;
    input {
        width: 400px;
        height: 50px;
        box-sizing: border-box;
        outline: none;
        padding: 0 20px;
        font-size: 16px;
    }
    button {
        width: 120px;
        height: 50px;
        border: none;
        background: #000;
        color: #fff;
        vertical-align: top;
    }

    select {
        width: 150px;
        height: 50px;
        border: 1px solid #999;
        outline: none;
        margin-left: 20px;
        vertical-align: top;
    }
`;
