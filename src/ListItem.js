import {useState} from 'react'
function ListItem(props) {
    const [check,setcheck] = useState(false)

    const change= () =>
    {
      
        setcheck(!check)
    }
return(

    <>
       <div className='list-item'>
            
            <input onChange={change} type="checkbox" className='checkbox'></input>
            <span style={{textDecoration:check?"line-through":"none"}}>{props.activity}</span>
        </div>
    </>
)
}

export default ListItem