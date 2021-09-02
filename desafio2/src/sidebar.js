import {links} from './app'


function Sidebar () {
    return (
        <div className='sidebar'>
            <ul>
                {links.map((item) => (
                <li key= {item} >
                    <a href = {item.title}> {item.title} </a>
                </li> 
             ))}

            </ul>
        </div>
    )
}

export default Sidebar