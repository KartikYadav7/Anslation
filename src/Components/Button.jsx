
const buttonList = [
    {
        name: 'Increment',
        class: 'bg-green-400',
        type: 'inc'
    },
    {
        name: 'Decrement',
        class: 'bg-red-400',
        type: 'dec'
    },
    {
        name: 'Reset',
        class: 'bg-blue-400',
        type: 'reset'
    }
]

const Button = ({ onClick }) => {
    return (
        <div className='flex flex-col md:flex-row gap-4 '>
            {buttonList.map((list, i) => (
                <button key={i} className={`text-xl md:text-2xl p-2 rounded-xl border border-bg-gray-400 cursor-pointer 
         hover:bg-transparent ${list.class}`}
                    onClick={() => onClick(list.type)}>{list.name}</button>))}

        </div>
    )
}

export default Button
