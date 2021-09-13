
export default function DisplayItems({ groc })
{
    const { title, status } = groc;

    return (
        <div>{title} 
            <button> Show wish list</button>
             </div>
    );
}
