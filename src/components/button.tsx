const Button = ({ title, task }: any) => {
    return (
        <button onClick={task}>{title}</button>
    )
}
export default Button;