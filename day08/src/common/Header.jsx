import { Link } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';

const HeaderCon = styled.header`
    background: #000;
    width: 100%;
    border-bottom: 2px solid #000;
    .inner {
        width: 1400px;
        margin: 0 auto;
        display: flex;
        height: 100px;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        h1 a {
            font-size: 25px;
        }
    }
`;

const Header = () => {
    return (
        <HeaderCon>
            <div className="inner">
                <h1>
                    <Link to="">
                        <img src="/images/logo.svg" alt="" />
                    </Link>
                </h1>

                <Nav />
            </div>
        </HeaderCon>
    );
};

export default Header;
