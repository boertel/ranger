const pictures =
    {
    "29461544292": {
        "height": "2448",
        "id": "29461544292",
        "src": {
            "farm": 9,
            "id": "29461544292",
            "secret": "c103a18c3c",
            "server": "8161",
            "type": "flickr"
        },
        "title": "IMG_8721",
        "width": "3264",
        "photographId": "ben",
    },
    "29490724701": {
        "height": "2448",
        "id": "29490724701",
        "src": {
            "farm": 9,
            "id": "29490724701",
            "secret": "865618c2bf",
            "server": "8162",
            "type": "flickr"
        },
        "title": "IMG_8718",
        "width": "3264",
        "photographId": "ben",
    },
    "29536697266": {
        "height": "3264",
        "id": "29536697266",
        "src": {
            "farm": 9,
            "id": "29536697266",
            "secret": "74f51f4a5f",
            "server": "8299",
            "type": "flickr"
        },
        "title": "Chilling saving lives",
        "width": "4896",
        "photographId": "ben",
    }
};


function loadPictures() {
    return {
        type: 'PICTURES_LOADED',
        pictures: pictures,
    };
}

function rank(id, ranking) {
    return {
        type: 'PICTURES_RANKED',
        id,
        ranking,
    };
}

function unrank(id) {
    return {
        type: 'PICTURES_UNRANKED',
        id,
    };
}

export default {
    loadPictures,
    rank,
    unrank,
};
