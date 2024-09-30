export default function TodoItem({ params }: { params: { id: string } }){
    return (
        <h1>Todo Item {params.id}</h1>
    )
}