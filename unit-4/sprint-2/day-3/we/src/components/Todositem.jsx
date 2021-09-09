function TodosItems({todo})
{
    const { title, status } = todo;
    return (
        <div>{title} = {status ? "Done" : "Not Done"}
        </div>
    );
}

export { TodosItems };