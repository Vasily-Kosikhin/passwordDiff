const PasswordMeter = require(`password-meter`)[`PasswordMeter`]
import './styles/main.css'

const password = document.querySelector(`input`);
const passwordDiffText = document.querySelector(`#passwordDifficulty`)

password.addEventListener(`input`, chekPassDiff);

function chekPassDiff() {
    let targetValue = event.target.value;
    console.log(targetValue)

    let level = (new PasswordMeter({}, {
        "40": "E",  // 001 <= x <  040
        "80": "D",  // 040 <= x <  080
        "120": "C", // 080 <= x <  120
        "180": "B", // 120 <= x <  180
        "200": "A", // 180 <= x <  200
        "_": "A+"   //        x >= 200
    }).getResult(targetValue));

    if(level[`status`] == `E`) {
        if (passwordDiffText.classList) {
            for (let cl of passwordDiffText.classList) {
                passwordDiffText.classList.remove(`${cl}`)
            }
        }
        passwordDiffText.classList.add(`statusE`)
    }
    if(level[`status`] == `D`) {
        if (passwordDiffText.classList) {
            for (let cl of passwordDiffText.classList) {
                passwordDiffText.classList.remove(`${cl}`)
            }
        }
        passwordDiffText.classList.add(`statusD`)
    }
    if(level[`status`] == `C`) {
        if (passwordDiffText.classList) {
            for (let cl of passwordDiffText.classList) {
                passwordDiffText.classList.remove(`${cl}`)
            }
        }
        passwordDiffText.classList.add(`statusC`)
    }
    if(level[`status`] == `B`) {
        if (passwordDiffText.classList) {
            for (let cl of passwordDiffText.classList) {
                passwordDiffText.classList.remove(`${cl}`)
            }
        }
        passwordDiffText.classList.add(`statusB`)
    }
    if(level[`status`] == `A` || level[`status`] == `A+`) {
        if (passwordDiffText.classList) {
            for (let cl of passwordDiffText.classList) {
                passwordDiffText.classList.remove(`${cl}`)
            }
        }
        passwordDiffText.classList.add(`statusA`)
    }
    
    
    
    passwordDiffText.innerHTML = `Protection level: ${level[`percent`]}%`
}

console.log(JSON.stringify(new PasswordMeter({
    minLength: 4,
    maxLength: 10,
    uppercaseLettersMinLength: 1,
    numbersMinLength: 1,    
    symbolsMinLength: 1,
    include: ['a', '$'],
    exclude: ['1baA$', '0xaZ$'],
}, {
        "40": "veryWeak",    // 001 <= x <  040
        "80": "weak",        // 040 <= x <  080
        "120": "medium",     // 080 <= x <  120
        "180": "strong",     // 120 <= x <  180
        "200": "veryStrong", // 180 <= x <  200
        "_": "perfect"       //        x >= 200
    }).getResults(['1baAe$', '0xaZ$', 'ERT', '1pwQvF@87$','12a4A6rx90$'])));


