import './Item.css';

function Item(props){

    let pname = props.name ;

    return(
        <p className="nirma">{pname}</p>
    );
}

export default Item;