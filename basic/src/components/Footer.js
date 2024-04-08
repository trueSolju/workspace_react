import { useState } from "react";

function Footer() {
    console.log('Footer 랜더링~');
    const num = 5;
    let [title, setTitle] = useState('기존 제목');

    function changeTitle(){
        setTitle('바뀐 제목');
    }

    return (
        <>
            <div>Footer~</div>
            {num%2 ==0 ?'짝수':'홀수'}입니다.
            <div>{title}</div>
            <div>
                <button type="button"onClick={changeTitle}>제목변경</button>
                <button type="button"onClick={()=>{setTitle('asd')}}>제목변경2</button>
            </div>
        </>
    );
}

export default Footer;