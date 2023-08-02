export default function Button({ name, onClick, onMouseEnter, onMouseLeave, textContent }) {
    return (
        <button className={name} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{textContent}</button>
    )
}