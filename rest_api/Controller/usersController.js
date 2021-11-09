const response = require('../response')

exports.users = (req, res) => {
    const users = [{
            "id": 1,
            "name": "Alex"
        },
        {
            "id": 2,
            "name": "Akira"
        },
        {
            "id": 3,
            "name": "Anna"
        },
    ];

    response.status(users, res);
}