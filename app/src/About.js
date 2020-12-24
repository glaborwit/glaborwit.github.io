import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/About.css';
import './css/Main.css';

// Images
import Me from './assets/images/me.jpeg';

function About() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="About">
            <div className="container mt-2 mt-md-5">
                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-md-6">
                        <Image src={Me} width="100%" />
                    </div>
                    <div className="col-12 col-md-6 mt-3 mt-md-0">
                    <h3 className="text-left mb-0">Gabrielle LaBorwit</h3>
                    <h4 className="text-left purple">UX Researcher</h4>
                        <p>
                            Hello! I am a <a target="_blank" rel="noopener noreferrer" href="https://www.hcii.cmu.edu/academics/mhci">Master of Human-Computer Interaction</a> (HCI) student at Carnegie Mellon University.
                        </p>

                        <p>
                            Although my focus is in HCI, I am equipped with an undergraduate degree in Computer Science and Cognitive Psychology. This provides me with the unique benefit of understanding the actions and motivations of the programmer as well as the needs and desires of the user.
                        </p>

                        <p>
                            When I am not studying, I enjoy taking photographs, browsing through <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@gabbi">Medium</a> articles, and cooking.
                        </p>

                        <p>
                            <b>Want to say hi? Let’s connect!</b>
                            <br />
                            Email: <a href="mailto: gabriellelaborwit@gmail.com">gabriellelaborwit@gmail.com</a>
                            <br />
                            Linkedin: <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabrielle-laborwit/">linkedin.com/in/gabrielle-laborwit</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
