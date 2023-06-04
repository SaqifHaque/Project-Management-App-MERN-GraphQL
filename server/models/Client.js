const mongoose = require('mongoose');

const clientSchema = new mongoose({
    name: {
        type: string
    },
    email: {
        type: string
    },
    phone: {
        type: string
    }
});

module.exports = mongoose.model('Client', clientSchema);