import './Skills.scss';
import aiIcon from '../../assets/icon-skills/ai-icon.webp'
import psIcon from '../../assets/icon-skills/ps-icon.webp'
import idIcon from '../../assets/icon-skills/in-icon.webp'
import xdIcon from '../../assets/icon-skills/xd-icon.webp'
import fIcon from '../../assets/icon-skills/f-icon.webp'

import htmlIcon from '../../assets/icon-skills/html-icon.webp'
import cssIcon from '../../assets/icon-skills/css-icon.webp'
import jsIcon from '../../assets/icon-skills/js-icon.webp'
import reactIcon from '../../assets/icon-skills/react-icon.webp'
import sassIcon from '../../assets/icon-skills/sass-icon.webp'

function Skills() {
    return (
        <section className='skillsSection' id='skills'>
            <h2>MES COMPÈTENCES</h2>
            <div className='designSkills'>
                <img className='skillImg' alt='Illustrator icon' src={aiIcon}></img>
                <img className='skillImg' alt='Photoshop icon'  src={psIcon}></img>
                <img className='skillImg' alt='Indesign icon' src={idIcon}></img>
                <img className='skillImg' alt='Adobe Xd icon' src={xdIcon}></img>
                <img className='skillImg' alt='Figma icon' src={fIcon}></img>
            </div>

            <div className='devSkills'>
                <img className='skillImg' alt='HTML icon' src={htmlIcon}></img>
                <img className='skillImg' alt='CSS icon' src={cssIcon}></img>
                <img className='skillImg' alt='JavaScript icon' src={jsIcon}></img>
                <img className='skillImg' alt='React icon' src={reactIcon}></img>
                <img className='skillImg' alt='SASS icon' src={sassIcon}></img>
            </div>
           
        </section>
    );
}

export default Skills;