
function Body(props){
    const num1 =10;
    const num2 =20;
    
    const person = {
        'name' : 'hong',
        'age' : 20
    };

    return(
        <>
        <div>Body</div>
        <div>{num1} / {num2} / {num1+num2}</div>
        <div>{person.name} / {person['age']}</div>
        <div>{props.stuInfo.stuName}/{props.stuInfo.age}/{props.stuInfo.score}</div>
        </>
    );
}

export default Body;