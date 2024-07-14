







export async function GET() {
    return Response.json({
        data
    })
}
export async function POST(req) {
    const newData = await req.json()
    data.push(
        {
            id: data.length + 1,
            name: newData.name
        }
    )

    return Response.json({
        message: "name added ",
        data
    })
}



const data = [
    {
        id: 1,
        name: "habib ulla"
    },
    {
        id: 2,
        name: "rakib shawon "
    },
    {
        id: 3,
        name: "Towhid ahmed"
    },
    {
        id: 4,
        name: "rakib lombu "
    },
    {
        id: 5,
        name: "siam ahmed "
    },
]