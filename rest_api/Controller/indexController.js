const response = require('../response');

exports.index = (req, res) => {
    response.status('HELLO, MY FRIENDS!', res);
};