import { JoinWrap } from './style';

const Join = () => {
    return (
        <>
            <JoinWrap>
                <div className="inner">
                    <h2> 회원가입 </h2>
                    <form>
                        <p>
                            <label> 이름 </label>
                            <input type="text" placeholder="홍길동" name="username" />
                        </p>
                        <p>
                            <label> 전화번호 </label>
                            <input type="tel" name="tel" />
                        </p>
                        <p>
                            <label>이메일 </label>
                            <input type="email" name="email" />
                        </p>
                        <p>
                            <label>비밀번호 </label>
                            <input type="password" name="password" />
                        </p>
                        <p>
                            <button type="submit">회원가입</button>
                            <button>취소</button>
                        </p>
                    </form>
                </div>
            </JoinWrap>
        </>
    );
};

export default Join;
