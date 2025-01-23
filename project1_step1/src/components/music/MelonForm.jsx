import { useEffect, useState } from 'react';
import { MelonFormContainer } from './style';
import { useDispatch } from 'react-redux';

const MelonForm = () => {
    return (
        <MelonFormContainer className="MelonForm">
            <input type="text" placeholder="곡명을 검색하세요" />
        </MelonFormContainer>
    );
};

export default MelonForm;
