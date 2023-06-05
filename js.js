const btn1 = document.querySelector('.btnON')
const btn2 = document.querySelector('.btnOf')

btn1.addEventListener('click', () => {
    document.querySelector('.img').src = 'ONbulb.jpg';
}
)

btn2.addEventListener('click', () => {
    document.querySelector('.img').src = 'OFFbulb.jpg';
}
)

document.querySelector('.textB').addEventListener('keyup', () => {
    const text = document.querySelector('.textB')
    const check = document.querySelector('.checkB');

    if (check.checked) {
        text.value = text.value.toUpperCase();

    } else {
        text.value = text.value.toLowerCase();
    }
}
)

// const newELement = document.createElement('p')
// // console.log(newELement);
// const newText = document.createTextNode('Bu yazi JS ile eklenmistir')
// newELement.appendChild(newText);
// console.log(newELement.innerText);
// newELement.style.color = 'red'
// newELement.style.fontSize = '2rem'
// newELement.style.marginTop = '1rem'
// newELement.style.border = '2px solid blue'

// const endOf = document.querySelector('.inputbox')
// endOf.before(newELement)



// const newTag = document.createElement('p')
// const newTagText = document.createTextNode('Please write what you wanna list (added by using JS)')
// newTag.appendChild(newTagText)

// newTag.style.color = 'indigo'
// newTag.style.fontSize = '2rem'
// newTag.style.marginTop = '2rem'

// const beforeDiv = document.querySelector('.addDelete')
// beforeDiv.before(newTag)


document.querySelector('.btnAdd').addEventListener('click', () => {

    const ulToAdded = document.querySelector('.ul')
    const inputList = document.querySelector('.inputbtnaddDelete')

    const listOfli = document.createElement('li')
    const textOf = document.createTextNode(inputList.value)

    listOfli.appendChild(textOf)
    ulToAdded.appendChild(listOfli)
    inputList.value = null
    inputList.focus()
}
)

document.querySelector('.btnDelete').addEventListener('click', () => {

    const ulToDeleted = document.querySelector('.ul')
    ulToDeleted.removeChild(ulToDeleted.lastElementChild)
}
)



document.querySelector('.inputbtnaddDelete').addEventListener('keydown', (e) => {


    if (e.code === 'Enter') {
        // btnAdd.click()
        const ulToAdded = document.querySelector('.ul')
        const inputList = document.querySelector('.inputbtnaddDelete')

        const listOfli = document.createElement('li')
        const textOf = document.createTextNode(inputList.value)

        listOfli.appendChild(textOf)
        ulToAdded.appendChild(listOfli)
        inputList.value = null
        inputList.focus()
    }

}
)