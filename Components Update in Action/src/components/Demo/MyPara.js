// Here only <p> will be flashed and changes only will be shown to this component only by the updating mechanism

const MyPara = (props) => {
    console.log("My Para");
    return <p>{props.children}</p>
};

export default MyPara;