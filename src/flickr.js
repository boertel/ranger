function buildUrl(photo, width, height) {
    let size;
    if (width && height) {
        size = threshold(width, height);
    }
    const extension = photo.extension || 'jpg';
    let base = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
    if (extension === 'gif') {
        size = 'o_d';
    }
    if (size !== undefined) {
        base += '_' + size;
    }
    return base + '.' + extension;
}

function threshold(width, height) {
    var limits = [
        { ext: 't', pixels: 100 },
        { ext: 'm', pixels: 240 },
        { ext: 'n', pixels: 320 },
        { ext: undefined, pixels: 500 },
        { ext: 'z', pixels: 640 },
        { ext: 'c', pixels: 800 },
        { ext: 'b', pixels: 1024 },
        { ext: 'h', pixels: 1600 },
    ]
    var max = Math.max(width, height),
        i = 0;

    while (i > limits.length - 1 || max >= limits[i].pixels) {
        i += 1;
    }
    return limits[i].ext;
}

export {
    buildUrl,
    threshold,
}
