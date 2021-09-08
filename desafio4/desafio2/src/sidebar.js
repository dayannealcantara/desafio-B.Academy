

function Sidebar({links, setTitle, setContent}) {

   function handleClick(e,link){
       e.preventDefault()
     setTitle(link.title)
     setContent(link.content)
       
   }

    return (
        
        <div className='sidebar'>  
            <ul className='links-sidebar'>
                {links.map((link) => (
                <li key= {link.id} >
                    <a  onClick={ (e) =>handleClick(e, link)} href={link.title}>{link.title}</a>
                </li> 
              ))}
            </ul>
           
        </div>
    )
}

export default Sidebar