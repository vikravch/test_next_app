import { Metadata } from 'next';
import { revalidatePath } from 'next/cache';

async function addTodo(formData: FormData) {
    'use server';
    await fetch('https://mate.academy/students-api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: formData.get('todoTitle'),
            userId: 3,
            completed: false
        }),
    });

    revalidatePath('/todos');
}

export default async function TodosPage() {
    const todosResponse = await fetch('https://mate.academy/students-api/todos?userId=3');
    const todos = await todosResponse.json();

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1>Todos page</h1>
            <form action={addTodo}>
                <input type="text" name='todoTitle' placeholder="Enter todo" />
                <button type="submit">Add</button>
            </form>
            {
                todos.map((todo: {title:string}, index:number) => (<div key={index}>
                        <span>{todo.title}</span>
                    </div>))
            }
        </main>
        </div>
    );
}


export const metadata: Metadata = {
    title: "Todos",
    description: "Todos list",
    keywords: "todos, list",
  };
  