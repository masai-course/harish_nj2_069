export default function Todolist({ list })
{

    return (
        <>
             {list.map((e) => 
                <div key={e.id}>
                    {e.name}
                </div>
            )}
            </>
  )
}