import './Header.scss';
import { Typewriter } from 'react-simple-typewriter';

function Header() {
    return (
        <section className='heroHeader'>
            <h1>
                <Typewriter
                    words={['Dev Front-End,', 'Dev Back-End,', 'Web Designer,','Graphiste,']}
                    loop={true}
                    cursor={true}
                    cursorStyle='_'
                    typeSpeed={150}
                    deleteSpeed={80}
                    delaySpeed={1000}
                />
            </h1>
        </section>
    );
}

export default Header;