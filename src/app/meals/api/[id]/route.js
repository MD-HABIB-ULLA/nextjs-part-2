export async function PATCH(req, { params }) {
    const body = await req.json()
    const index = data.findIndex((a) => a.id === parseInt(params.id))
    data[index] = {
        id: parseInt(params.id),
        name: body.name
    }
    return Response.json({
        massage: "successfully updated ",
        data

    })
}
export async function DELETE(req, { params }) {
   
    const otherData = data.filter((a) => a.id !== parseInt(params.id))
    
    return Response.json({
        massage: "successfully deleted ",
        otherData
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





export async function GET(req, { params }) {
    console.log(params.id)

    return Response.json({
        massage: "dynamic route added"
    })
}