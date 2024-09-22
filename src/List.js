import ListItem from './ListItem';
function List() 
{

const list= ["Wake Up Early", "Do WorkOut", "Prepare Healthy meal", "Eat Breakfast"]
    return(
        <div>
        <h1>List Of Activities</h1>
        {
            list.map(function(data){
                return  <ListItem activity={data}></ListItem>
            })
        }
    
        </div>
    )
}

export default List