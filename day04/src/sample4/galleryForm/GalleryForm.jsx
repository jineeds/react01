import { useState } from 'react';
import { GalleryFormContainer } from './style';

const GalleryForm = ({ onSearch, onSort }) => {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSearch(text);
  };

  const changeInput = (e) => {
    const { value } = e.target;
    onSort(value);
  };

  return (
    <GalleryFormContainer onSubmit={onSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">검색</button>
      {/* 
      onChange={changeInput} */}
      <select onChange={changeInput}>
        <option value="">=== 정렬 === </option>
        <option value="views">제목</option>
        <option value="user">조회수</option>
        <option value="downloads">다운로드</option>
        <option value="likes">좋아요 </option>
      </select>
    </GalleryFormContainer>
  );
};

export default GalleryForm;
