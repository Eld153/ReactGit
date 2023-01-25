import { useState } from 'react'

// React Hooks
function TodoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    // Набор текста в поле ввода
    const textEntry = (e) => {
        setUserInput(e.currentTarget.value)
    }

    // Добавить задачу
    const addSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    
    // Добавить задачу клавишей Enter
    const clickKey = (e) => {
        if (e.key === 'Enter') {
            addSubmit(e)
        }
    }

    return (
        <form onSubmit={addSubmit}>
            <input
                value={userInput}
                type='text'
                onChange={textEntry}
                onKeyDown={clickKey}
                placeholder='Введите задание'
            />
            <button>Сохранить</button>
        </form>
    )
}

export default TodoForm