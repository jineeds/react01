import { useSelector } from 'react-redux';
import styled from 'styled-components';

const UserPageCon = styled.div`
    h2 {
        color: hotpink;
    }
    article {
        padding: 50px;
        background: #efefef;
        p {
            border-bottom: 1px solid #999;
            line-height: 50px;
            &:last-child {
                border-bottom: none;
                margin-top: 50px;
            }
            button {
                width: 200px;
                height: 40px;
                background: #000;
                color: #fff;
                border: none;
                font-size: 15px;
            }
        }
    }
`;

const UserDetaile = () => {
    const onGo = () => {};
    return (
        <UserPageCon>
            <div className="inner">
                <article>
                    <h2> name 의 상세 페이지 </h2>
                    <p> 번호 : id </p>
                    <p> 이름 : name </p>
                    <p> 이메일 :email </p>
                    <p>
                        <button onClick={onGo}>목록으로</button>
                    </p>
                </article>
            </div>
        </UserPageCon>
    );
};

export default UserDetaile;
