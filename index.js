var Song = require('nesly-sound');

var song = Song();
var note = song.note;

var sq1 = song.square1;
var sq2 = song.square2;
var tri = song.triangle;
var noi = song.noise;

function loop(n, fn) {
    if (n === 0) {
        return
    }

    fn()
    return loop(n - 1, fn)
}

function yes() {

    loop(4, function () {
        sq1(['A3', 'Cs3', 'E3'])
        .timing(1/4)

        sq2(['rest', 'rest', 'rest'])
        .timing(1/4)

        tri(['A2', 'Cs2', 'E2'])
        .timing(1/4)
    })

    loop(4, function () {
        sq1(['Eb3', 'G3', 'Bb4'])
        .timing(1/4)

        sq2(['rest', 'rest', 'rest'])
        .timing(1/4)

        tri(['Eb2', 'G2', 'Bb2'])
        .timing(1/4)
    })

    loop(2, function () {
        sq1(['G3', 'B3', 'D4'])
        .timing(1/4)

        sq2(['rest', 'rest', 'rest'])
        .timing(1/4)

        tri(['G3', 'B2', 'D3'])
        .timing(1/4)
    })

    loop(2, function () {
        sq1(['D3', 'Fs3', 'A4'])
        .timing(1/4)

        sq2(['rest', 'rest', 'rest'])
        .timing(1/4)

        tri(['D3', 'Fs2', 'A3'])
        .timing(1/4)
    })

    loop(2, function () {
        sq1(['G3', 'B3', 'D4'])
        .timing(1/4)

        sq2(['D4', 'B4', 'G3'])
        .timing(1/4)

        tri(['G3', 'B2', 'D3'])
        .timing(1/4)
    })

    loop(2, function () {
        sq1(['D3', 'Fs3', 'A4'])
        .timing(1/4)

        sq2(['rest', 'rest', 'rest'])
        .timing(1/4)

        tri(['D3', 'Fs2', 'A3'])
        .timing(1/4)
    })

    loop(2, function () {
        sq1(['D3', 'Fs3', 'A4'])
        .timing(1/4)

        sq2(['A5', 'Fs4', 'D4'])
        .timing(1/4)

        tri(['D3', 'Fs2', 'A3'])
        .timing(1/4)
    })

    loop(2, function () {
        sq1(['D3', 'Fs3', 'A4'])
        .timing(1/4)

        sq2(['Fs4', 'D4', 'A4'])
        .timing(1/4)

        tri(['Fs2', 'D4', 'A3'])
        .timing(1/4)
    })
    
    loop(2, function () {
        sq1(['D3', 'Fs3', 'A4'])
        .timing(1/4)

        sq2(['rest', 'rest', 'rest'])
        .timing(1/4)

        tri(['D3', 'Fs2', 'A3'])
        .timing(1/4)
    })
}

yes()

song.done();
song.write();
