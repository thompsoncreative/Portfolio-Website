let now = new Date();
let photographyDate = new Date(2013, 1, 1);
let codingDate = new Date(2023, 0, 23);
let photographyExperience = now - photographyDate;
let codingExperience = now - codingDate;

const yearsExperience = experience => {
    let years = experience / (1000 * 60 * 60 * 24 * 365.25);
    return years.toFixed(2);
}

const photographyResult = ` ${yearsExperience(photographyExperience)} years`
const codingResult = ` ${yearsExperience(codingExperience)} years`

document.getElementById('photography-experience').innerHTML = photographyResult
document.getElementById('coding-experience').innerHTML = codingResult
