export const loggerin = (msg, entorno, error) => {
    const RED = '\x1B[31m';
    const BLUE = '\x1B[34m';
    const GREY = '\x1B[30m';
    const GREEN = '\x1B[32m';
    const YELLOW = '\x1B[33m';
    const PINK = '\x1B[35m';
    const CYAN = '\x1B[36m';
    const WHITE = '\x1B[37m';
    const OTHER = '\x1B[39m'; //default
    const END = '\x1B[0m';
    const d = new Date();
    if (error) {
        if (entorno) {
            console.log(PINK + d.toLocaleDateString() + '-' + d.toLocaleTimeString() + ' ||' + YELLOW, entorno + ':' + RED, msg, END);
        }
        else {
            console.log(PINK + d.toLocaleDateString() + '-' + d.toLocaleTimeString() + ' ||' + RED, msg, END);
        }
    }
    else {
        if (entorno) {
            console.log(PINK + d.toLocaleDateString() + '-' + d.toLocaleTimeString() + ' ||' + YELLOW, entorno + ':' + GREEN, msg, END);
        }
        else {
            console.log(PINK + d.toLocaleDateString() + '-' + d.toLocaleTimeString() + ' ||' + GREEN, msg, END);
        }
    }
};
