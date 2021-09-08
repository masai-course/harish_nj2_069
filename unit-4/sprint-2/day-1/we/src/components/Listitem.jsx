export function ListItem(props)
{
    console.log(props.age, props.name);
    return <div>
        hello {props.name} you are {props.age} years old
        {/* <button>Click</button> */}
    </div>
}