const resArray = [
    {
        id: 1,
        name: 'John Doe',
        email: 'test@gmail.com'
    }
]

export function GET() {
    return new Response(JSON.stringify(resArray), {
        headers: {
            'content-type': 'application/json',
        },
    });
}