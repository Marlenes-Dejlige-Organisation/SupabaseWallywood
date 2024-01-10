export const array =['sol', 'sommer', 'lækkert']

export const List = props =>{
    return (
        <ul>
            {props.data.map((item,key)=>{
                return (
                    <li key={key}>{item}</li>
                )
            })}
        </ul>
    )
}