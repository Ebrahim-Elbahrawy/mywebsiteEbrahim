import React, { useEffect ,useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse ,faBlog ,faAddressBook,faBoxArchive ,faHighlighter} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function IconSection() {
    const [activeLink, setActiveLink] = useState('/');
     useEffect(()=>{
        const links = document.querySelectorAll(".links-toggle a");
        links.forEach(link => {
            link.addEventListener('click', () => {
                setActiveLink(link.pathname); // Update activeLink state when a link is clicked
            });
        });
    },[]);
  return (
     <div className='links-toggle'>
            <Link to="/experience"  title='experience'>
                <FontAwesomeIcon icon={faHighlighter} className={activeLink === '/experience' ? 'active' : ''} />
            </Link >
            <Link to="/blog" title='blog'>
                <FontAwesomeIcon icon={faBlog} className={activeLink === '/blog' ? 'active' : ''} />
            </Link >
            <Link to="/"  title='home'>
                <FontAwesomeIcon icon={faHouse} className={activeLink === '/' ? 'active' : ''} />
            </Link >
            <Link to="/project" title='project'>
                <FontAwesomeIcon icon={faBoxArchive} className={activeLink === '/project' ? 'active' : ''} />
            </Link >
            <Link to="/contact"  title='contact'>
                <FontAwesomeIcon icon={faAddressBook} className={activeLink === '/contact' ? 'active' : ''}/>
            </Link >
        </div>
  )
}

export default IconSection