let servers = [
    { id: "1", name: "AWS", status: "working" },
    { id: "2", name: "Google", status: "pending" },
    { id: "3", name: "Yandex", status: "working" },
    { id: "4", name: "Yahoo", status: "working" },
    { id: "5", name: "Mail", status: "working" },
    { id: "6", name: "Mozilla", status: "working" },
    { id: "7", name: "Firebase", status: "pending" },
    { id: "8", name: "Opera", status: "working" }
]

export const getALL = (req, res) => {
    res.status(200).json(servers)
}

export const create = (req, res) => {

    const newServer = {
        id: Date.now().toString(),
        ...req.body
    }
    servers.push(newServer)
    res.status(201).json(newServer)
}

export const remove = (req, res) => {
    console.log("ID: ", req.params.id);
    servers = servers.filter(serv => serv.id !== req.params.id)
    res.json({ message: "Server has been removed" })
}