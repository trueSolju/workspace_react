import { useState } from "react";

function Header(props) {
    console.log(props);
    //const {num1, myName}= props;

    //input 태그에 입력한 데이터를 저장할 변수
    let [addr, setAddr] = useState('');

    return (
        <>
            <div>
                <h1>Header~{props.num1}</h1>
            </div>
            <div>
                <h1>Header~{props.myName}</h1>
                <input type="text" name="addr" onChange={(e) => {
                    // console.log(e.target.value);
                    setAddr(e.target.value);
                }}/>
            </div>
        </>

    );
}

export default Header;//header라는 컴포넌트를 내보내겠습니다.