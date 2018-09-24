let data = [
    {
        'prototype' : 'temporary_1',
        'type' : 'integer'
    },
    {
        'prototype' : 'temporary_2',
        'type' : 'string'
    },
    {
        'prototype' : 'temporary_3',
        'type' : 'string'
    },
    {
        'prototype' : 'temporary_4',
        'type' : 'integer'
    },
    {
        'prototype' : 'temporary_5',
        'type' : 'string'
    }
];

let temp = {};

function createNewObject(data, type) {
    for (let i = 0; i < data.length; i++) {
        if (temp[data[i][type]]) {
            temp[data[i][type]].push(data[i]);
        } else {
            temp[data[i][type]] = [];
            temp[data[i][type]].push(data[i]);
        }
    }
    return temp
}

console.log(createNewObject(data, 'type'));