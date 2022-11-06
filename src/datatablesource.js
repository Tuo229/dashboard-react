export const  userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user',
        headerName: 'User',
        width: 230,
        renderCell: (params) => {
            return (
                    <div className="cellWithImg">
                        <img className="cellImg" src={params.row.img} alt="avatar"/>
                        {params.row.username}
                    </div>
                )
            }
    },
    {field: "email", headerName: "Email", width: 250},
    {field: "age", headerName: "Age", width: 100},
    {
        field: "status", 
        headerName: "Status", 
        width: 150,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
},
]


// temporary data

export const userRows = [
    {
        id: 1,
        username: "Amani",
        img: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
        status: "active",
        email: "amani@gmail.com",
        age: 23,
    },
    {
        id: 2,
        username: "Tuo",
        img: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
        status: "active",
        email: "tuo@gmail.com",
        age: 24,
    },
    {
        id: 3,
        username: "Diomandé",
        img: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
        status: "active",
        email: "diomande@gmail.com",
        age: 25,
    },
    {
        id: 4,
        username: "Koné",
        img: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
        status: "passive",
        email: "kone@gmail.com",
        age: 22,
    },
    {
        id: 5,
        username: "Stephane",
        img: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
        status: "active",
        email: "stephane@gmail.com",
        age: 25,
    },
    {
        id: 6,
        username: "Bony",
        img: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
        status: "pending",
        email: "bony@gmail.com",
        age: 23,
    },
    {
        id: 7,
        username: "Keita",
        img: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
        status: "pending",
        email: "keita@gmail.com",
        age: 24,
    },
    {
        id: 8,
        username: "Ntaye",
        img: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
        status: "passive",
        email: "staye@gmail.com",
        age: 22,
    },
    {
        id: 9,
        username: "Tiecoura",
        img: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
        status: "active",
        email: "tiecoura@gmail.com",
        age: 22,
    },
    {
        id: 10,
        username: "Sonia",
        img: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
        status: "active",
        email: "sonia@gmail.com",
        age: 25,
    },
    {
        id: 11,
        username: "Miguel",
        img: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
        status: "passive",
        email: "migue@gmail.com",
        age: 22,
    },
]

// Product table data


export const  productColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'product',
        headerName: 'Product',
        width: 230
    },
    {field: "img", headerName: "Image", width: 250},
    {field: "customer", headerName: "Customer", width: 100},
    {field: "date", headerName: "Date", width: 100},
    {field: "amount", headerName: "Amount", width: 100},
    {field: "method", headerName: "Payement Method", width: 100},
    {
        field: "status", 
        headerName: "Status", 
        width: 150,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
},
]

export const ProductRows = [
        {
            id: 152400,
            product: "Acer Nitro 5",
            img: "https://www.notebookcheck.biz/uploads/tx_nbc2/AcerNitro5-AN515-55__1__07.JPG",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 15201,
            product: "Playstation 5",
            img: "https://fr.mytrendyphone.be/images/2-in-1-Charging-Station-for-Sony-PlayStation-5-DualSense-Controller-09122020-01-p.jpg",
            customer: "Dimandé Mohamed",
            date: "4 March",
            amount: 900,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id: 152402,
            product: "Asus ROG Strix",
            img: "https://m.media-amazon.com/images/I/81fZmxBbQgL._AC_SL1500_.jpg",
            customer: "Bony Serge",
            date: "2 May",
            amount: 1600,
            method: "Online",
            status: "Approved",
        },
        {
            id: 152403,
            product: "DELL Latitued 5520",
            img: "data:image/jpeg;base64,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",
            customer: "TUO Navigué",
            date: "8 August",
            amount: 1450,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 152404,
            product: "Mac Book Pro Air",
            img: "https://pic.clubic.com/v1/images/2017518/raw?fit=max&width=1200&hash=ef3a6240194fafe0ef17dc11e4a1b9cf19043c51",
            customer: "Tesla Bienvenue Kouassi",
            date: "21 September",
            amount: 950,
            method: "Online Payment",
            status: "Approved",
        }
    ]