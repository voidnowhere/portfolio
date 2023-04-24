export function renderDate(date, options) {
    date = date.toLocaleString('fr-FR', options);
    return date.charAt(0).toUpperCase() + date.slice(1);
}
