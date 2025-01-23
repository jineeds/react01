import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import UserItem from '../../components/users/UserItem';

const UserCon = styled.div`
    ul {
        border: 1px solid pink;
        padding: 10px;
        li {
            border-bottom: 1px solid #999;
            line-height: 50px;
            &:last-child {
                border-bottom: none;
            }
        }
    }
`;

const User = () => {
    return (
        <UserCon>
            <div className="inner">
                <h2> User List </h2>
                <ul>
                    <UserItem />
                </ul>
            </div>
        </UserCon>
    );
};

export default User;
