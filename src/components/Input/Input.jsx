export default function Input({ type, placeholder, id, classes, operation }) {
     return (
           <input id={id} type={type} placeholder={placeholder} className={`${classes} border pl-3 py-3`} onBlur={operation} required />
     )
}