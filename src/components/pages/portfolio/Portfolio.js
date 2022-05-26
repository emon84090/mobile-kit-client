import React from 'react';

const Portfolio = () => {
    return (
        <>
            <section className='portfolio min-h-screen'>
                <div className="card w-full max-w-2xl mt-5 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className='uppercase font-bold mb-5'>HELLO, MY NAME IS Jahirul islam emon</h2>
                        <p>Name: <span className='font-semibold'>Emon Sarker</span></p>
                        <p> Address: <span className='font-semibold'>Dinajpur,Bangladesh</span></p>
                        <p> Education: <span className='font-semibold'>Dinajpur Textile Institute,Dinajpur</span></p>
                        <p>Email: <span className='font-semibold'>Emon227616@gmail.com</span></p>
                        <p>Phone: <span className='font-semibold'>01722761605</span></p>
                        <p className='mt-5 font-semibold capitalize'>website link</p>
                        <ul className="menu bg-base-100 w-56">
                            <li><a href='https://cryptoinformtaion.tk' className='text-primary underline' target="_BLANK" >Cryptoinformtaion</a></li>

                            <li><a href='https://delicate-madeleine-908fbb.netlify.app' className='text-primary underline' target="_BLANK" >Fruits Store</a></li>

                            <li><a href='https://quiet-elf-465631.netlify.app/' className='text-primary underline' target="_BLANK" >Mackbook pro</a></li>
                        </ul>
                    </div>
                </div>

                <h2 className='mb-5 font-semibold text-center text-2xl mt-8'>My Skill</h2>
                <div className="card mt-5 w-full max-w-2xl mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="skill-item mt-2 w-full">
                            <div className="skill-text flex justify-center">
                                <p>html/css</p>
                                <p className='text-primary font-semibold'>90%</p>
                            </div>
                            <progress className="progress progress-primary w-full" value="90" max="100"></progress>
                        </div>
                        <div className="skill-item mt-2 w-full">
                            <div className="skill-text flex justify-center">
                                <p>tailwind/bootstrap</p>
                                <p className='text-primary font-semibold'>80%</p>
                            </div>
                            <progress className="progress progress-primary w-full" value="80" max="100"></progress>
                        </div>

                        <div className="skill-item mt-2 w-full">
                            <div className="skill-text flex justify-center">
                                <p>javascript</p>
                                <p className='text-primary font-semibold'>60%</p>
                            </div>
                            <progress className="progress progress-primary w-full" value="60" max="100"></progress>
                        </div>
                        <div className="skill-item mt-2 w-full">
                            <div className="skill-text flex justify-center">
                                <p>react js</p>
                                <p className='text-primary font-semibold'>60%</p>
                            </div>
                            <progress className="progress progress-primary w-full" value="60" max="100"></progress>
                        </div>
                        <div className="skill-item mt-2 w-full">
                            <div className="skill-text flex justify-center">
                                <p>node/express</p>
                                <p className='text-primary font-semibold'>50%</p>
                            </div>
                            <progress className="progress progress-primary w-full" value="50" max="100"></progress>
                        </div>

                        <div className="skill-item mt-2 w-full">
                            <div className="skill-text flex justify-center">
                                <p>mongodb</p>
                                <p className='text-primary font-semibold'>30%</p>
                            </div>
                            <progress className="progress progress-primary w-full" value="30" max="100"></progress>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;