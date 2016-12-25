import del from 'del';
import config from './../config';

export function clean() {
    return del([
        config.dest
    ]);
}

clean.description = `clean dest folder recursively.`;