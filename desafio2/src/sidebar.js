
function Sidebar({links, setTitle, setContent}) {

   function handleClick(e,link){
       e.preventDefault()
     setTitle(link.title)
     setContent(link.content)
       
   }

    return (
        <aside className='sidebar'>
            <ul className='links-sidebar'>
                {links.map((link) => (
                <li key= {link.id} >
                    <a  onClick={ (e) =>handleClick(e, link)} href={link.title}>{link.title}</a>
                </li> 
              ))}

            </ul>
        </aside>
    )
}

export default Sidebar