import "../../css/topbar.css";
import {useState} from 'react';
import { useNavigate} from "react-router-dom";


const Topbar = () => {
    const [topbarContainer,settopbarContainer] = useState(false);
    const navigate = useNavigate();
    const changeBackground=()=>{
        if(window.scrollY >= 80){
            settopbarContainer(true);
        }
        else{
            settopbarContainer(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
  return (
    <div className={topbarContainer ? 'topbarContainer active':'topbarContainer'}>
      <div className="topbarLeft">
        <span className={topbarContainer ? 'logo blk':'logo'} onClick={() => {navigate("/")}}>ProjectiON</span>
      </div>
      <div className="topbarCenter">
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className={topbarContainer ? 'topbarLink blk':'topbarLink'} id="topbarLogin" onClick={() => {navigate("/")}}>Home</span>
          <span className={topbarContainer ? 'topbarLink blk':'topbarLink'} id="topbarLogin" onClick={() => {navigate("/projects")}}>Projects</span>
          <span className={topbarContainer ? 'topbarLink blk':'topbarLink'} id="topbarLogin" >About Us</span>
          <span className={topbarContainer ? 'topbarLink blk':'topbarLink'} id="topbarLogin" >Contact Us</span>
        </div>
      </div>
      <button class="log" onClick={()=>{navigate("/login")}}>Login</button>
    </div>
  );
}

export default Topbar;