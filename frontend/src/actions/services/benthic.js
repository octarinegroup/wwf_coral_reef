export function getBenthicData() {
    return fetch('http://localhost:3000/benthic')
    .then(response => response.json())
}