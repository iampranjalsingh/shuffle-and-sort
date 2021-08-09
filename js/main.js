const boxDesign = ['#6F98A8', '#2B8EAD', '#2F454E', '#2B8EAD', '#2F454E', '#BFBFBF', '#BFBFBF', '#6F98A8', '#2F454E'];

function sortAndShuffle(shuffle = false, isMobile = false) {
    let arr = Object.keys(boxDesign);
    if(shuffle) {
        arr.sort(() => Math.random() - 0.5);
    }
    if(isMobile) {
        generateElementsMobile(arr);
    } else {
        generateElements(arr);
    }
}

function generateElements(arr) {
    let boxElements = '';
    arr.forEach((elem, index) => {
        let elemVal = parseInt(elem) + 1;
        if(index%3 === 0) {
            boxElements += `<div class="row"><div class="elem elem${elemVal}"><p>${elemVal}</p></div>`;
        } else if(index%3 === 2) {
            boxElements += `<div class="elem elem${elemVal}"><p>${elemVal}</p></div></div>`;
        } else {
            boxElements += `<div class="elem elem${elemVal}"><p>${elemVal}</p></div>`;
        }
    });
    document.getElementById("box").innerHTML = boxElements;
}

function generateElementsMobile(arr) {
    let boxElements = '';
    arr.forEach(elem => {
        let elemVal = parseInt(elem) + 1;
        boxElements += `<div class="elem elem${elemVal}"><p>${elemVal}</p></div>`;
    });
    document.getElementById("box").innerHTML = boxElements;
}