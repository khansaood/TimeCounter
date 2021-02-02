var minu = document.getElementById('Min')
var seco = document.getElementById('Sec')

minu.value
seco.value
var hide;


var displaymin = document.getElementById('dismin')
var displaysec = document.getElementById('dissec')
var interval;



function countertwo() {
    if (minu.value == 0 && seco.value == 1) {
        seco.value = ("Timess Up")
            // alert('Times Up')
        hide.disabled = false
        clearInterval(interval)
    } else if (seco.value == 0 && minu.value == 0) {
        alert("error!! " + "Enter Values")
        clearInterval(interval)
        hide.disabled = false
    } else if (seco.value == 0) {
        minu.value--
            seco.value = 59;
    } else {
        seco.value--
    }
}


// function counterthree() {
//     if (seco.value == 0 && minu.value == 0 && hour.value == 0) {
//         alert("times Up")
//     } else if (seco.value == 0 && minu.value == 0) {
//         minu.value == 59
//         hour.value--
//     } else if (seco.value == 0) {
//         seco.value = 59;
//         minu.value--
//     } else {
//         seco.value--
//     }
// }



function trie() {
    interval = setInterval(countertwo, 1000)
    hide = document.getElementById('start')
    hide.disabled = true;
}

function stop() {
    clearInterval(interval)
    hide.disabled = false
}

function del() {
    minu.value = 0
    seco.value = 0
    stop()
}