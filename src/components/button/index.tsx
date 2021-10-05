import "./button.css"

const Button = ({ title, task }: any) => {
    return (
        <button data-cy="button-component" onClick={task}>{title}</button>
    )
}
export default Button;