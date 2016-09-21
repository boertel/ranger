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
        if (size !== '') {
            base += '_' + size;
        }
        return base + '.' + extension;
    } else {
        return photo.url_o;
    }
}

function threshold(width, height) {
    var limits = [
        { ext: 't', pixels: 100 },
        { ext: 'm', pixels: 240 },
        { ext: 'n', pixels: 320 },
        { ext: '', pixels: 500 },
        { ext: 'z', pixels: 640 },
        { ext: 'c', pixels: 800 },
        { ext: 'b', pixels: 1024 },
        { ext: 'b', pixels: 1600 },
    ]
    let ext;
    const max = Math.max(width, height);

    for (let i = 0; i < limits.length - 1; i += 1) {
        if (max >= limits[i].pixels && max < limits[i + 1].pixels) {
            ext = limits[i].ext;
        }
    }
    return ext;
}

export {
    buildUrl,
    threshold,
}
