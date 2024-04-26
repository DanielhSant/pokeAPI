
export default function corTipo (tipo, order) {
    let cor = ''
    if (tipo === 'grass') {
        return cor = '#afe8bc'
    } else if (tipo === 'fire') { 
        return cor = '#cd8886'
    } else if (tipo === 'water') {
        return cor = '#a3aeee'
    } else if (tipo === 'bug') {
        return cor = '#c9e1ac'
    } else if (tipo === 'normal') {
        return cor = '#757575'
    } else if (tipo === 'poison') {
        return cor = '#9f34d8'
    } else if (tipo === 'electric') {
        return cor = '#f7f02e'
    } else if (tipo === 'ground') {
        return cor = '#ce7656' 
    } else if (tipo === 'fairy') {
        return cor = '#f484b6'
    } 
}
