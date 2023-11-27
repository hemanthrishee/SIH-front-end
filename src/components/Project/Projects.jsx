import '../../css/projects.css';
import { useState , useEffect } from 'react';
import Projectdata from './projectData';
import Footer from '../Footer/Footer.jsx';
import Canvas from '../Canvas/canvas.jsx';
import TopbarLogin from '../Header/topbarLogin.jsx';
import Search from '../Header/searchbar.jsx';
import TopbarUni from '../Header/topbarUni.jsx';
import Topbar from '../Header/topbar.jsx';

function Projects() {
    const [projects , setProjects] = useState([])
    useEffect(() => {
        setProjects([{"id":0, "name":"ABC", "university":"ABC"},{"id":1, "name":"DEF", "university":"DEF"},{"id":2, "name":"GHI", "university":"GHI"},{"id":3, "name":"JKL", "university":"JKL"},{"id":3, "name":"JKL", "university":"JKL"},{"id":3, "name":"JKL", "university":"JKL"},{"id":3, "name":"JKL", "university":"JKL"}]);
        }, []);
    return (<>
        {localStorage.getItem("loginCredentials") !== null ? JSON.parse(localStorage.getItem("loginCredentials")).univ === true ? <TopbarUni /> : <Topbar /> : <TopbarLogin/>}
        <div className="projectsmain">
            <div>
                <div className='searchbar'>
                    <input type='text' placeholder='Search'></input>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>University</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Projectdata projects={projects}/>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
    </>
    );
}

export default Projects;