import styled from 'styled-components';

const ProfileCon = styled.div`
    h2 {
        font-size: 40px;
        margin-bottom: 40px;
        font-weight: bold;
    }
`;

const Profile = () => {
    return (
        <ProfileCon>
            <div className="inner">
                <h2> Profile Page입니다.</h2>
            </div>
        </ProfileCon>
    );
};

export default Profile;
