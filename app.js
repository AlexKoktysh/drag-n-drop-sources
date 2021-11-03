const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
let activePlaceholder = 3

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const [index, placeholder] of placeholders.entries()) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', (event) => drop(event, index))
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    event.target.classList.remove('start', 'progress', 'done')
    if (activePlaceholder === 0) {
        event.target.classList.add('start')
    } else if (activePlaceholder === 1) {
        event.target.classList.add('progress')
    } else if (activePlaceholder === 2) {
        event.target.classList.add('done')
    }
    event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function drop(event, index) {
    activePlaceholder = index
    event.target.classList.remove('hovered')
    event.target.append(item)
}
