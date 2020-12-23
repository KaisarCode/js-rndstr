// Pseudo-random string
function rndstr(len, char) {
    len = len || 8;
    char = char || '';
    var str = '';
    char   += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    char   += 'abcdefghijklmnopqrstuvwxyz';
    char   += '0123456789';
    var chl = char.length;
    for (var i = 0; i < len; i++) {
        str += char.charAt(Math.floor(Math.random() * chl));
    } return str;
}
