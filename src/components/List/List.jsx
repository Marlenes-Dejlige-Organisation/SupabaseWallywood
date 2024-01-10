//dette er en given array, den sender jeg med, men List fungerer sammen med alle arrays med strings, jeg skal bare notere der hvor jeg bruger List, hvad den skal køre med, fx sådan: <List data={array}></List>
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