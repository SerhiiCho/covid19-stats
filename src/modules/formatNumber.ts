export default (num: number|null) => {
    if (!num) {
        return ''
    }

    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}