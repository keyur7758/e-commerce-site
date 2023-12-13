import Header from '../components/Header'
import Footer from '../components/Footer'
import '../Home.css'
import Carousel from 'react-bootstrap/Carousel'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'
import News from '../components/News'
import Button from 'react-bootstrap/Button';
import '../Card.css'
import Product from './Product';
import { Link } from 'react-router-dom';
import Product2 from './Product2';


export default function Home() {


    const options1 = {
        items: 3,
        nav: false,
        rewind: true,
        autoplay: true,
        loop: true,
        autoplayTimeout: 2000,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },

            1000: {
                items: 3
            }
        }
    };
    const options2 = {
        items: 8,
        nav: false,
        rewind: true,
        autoplay: true,
        loop: true,
        autoplayTimeout: 1000,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            430: {
                items: 3
            },
            600: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            },
            1600: {
                items: 8
            }
        }
    };


    return (
        <>
            <Header />
            <div className='slider-area'>

                <Carousel>
                    <Carousel.Item interval={1000}>
                        <Link className='Menu-option' to='/Women'>
                            <img className="img-fluid" src='/images/banner-1.webp' alt='404 error'/>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <Link className='Menu-option' to='/Women'>
                            <img className="img-fluid" src='/images/banner-2.webp' alt='404 error'/>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link className='Menu-option' to='/Women'>
                            <img className="img-fluid" src='/images/banner-3.webp' alt='404 error'/>
                        </Link>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='middle-area'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-8'>
                            <Link className='Menu-option' to='/Men'>
                                <div className='middle-img'>
                                    <img className="img-fluid" src='/images/middle-banner-1.webp' alt='404 error'/>
                                </div>
                            </Link>
                        </div>
                        <div className='col-md-12 col-lg-4'>
                            <div className='second-slide border-clock'>
                                <div className='flash-box'>
                                            <h3>Flash Sale</h3>
                                    <Carousel slide={false} >
                                        <Carousel.Item>
                                            <div className='flash-sale'>
                                                <div className='flash-img'>
                                                    <img className="img-fluid" src='/images/shoes.webp'  alt='404 error'/>
                                                </div>
                                                <div className='flash-detail'>
                                                    <h5>Wayfarer Shoes</h5>
                                                    <p>Our engineer developed...</p>
                                                    <h5>$20.00</h5>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className='flash-sale'>
                                                <div className='flash-img'>
                                                    <img className="img-fluid" src='/images/clock.webp'  alt='404 error'/>
                                                </div>
                                                <div className='flash-detail'>
                                                    <h5>Wayfarer Clock</h5>
                                                    <p>Our engineer developed...</p>
                                                    <h5>$20.00</h5>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='First-carousel'>
                <OwlCarousel options={options1}  >
                    <div>
                        <Link className='Menu-option' to='/Women'>
                            <img className="img-fluid" src="/images/carousel(1)-1.webp" alt="The Last of us" />
                        </Link>
                    </div>
                    <div>
                        <Link className='Menu-option' to='/Women'>
                            <img className="img-fluid" src="/images/carousel(1)-2.webp" alt="The Last of us" />
                        </Link>
                    </div>
                    <div>
                        <Link className='Menu-option' to='/Women'>
                            <img src="/images/carousel(1)-3.webp" alt="The Last of us" />
                        </Link>
                    </div>
                    <div>
                        <Link className='Menu-option' to='/Women'>
                            <img src="/images/carousel(1)-1.webp" alt="The Last of us" />
                        </Link>
                    </div>
                    <div>
                        <Link className='Menu-option' to='/Women'>
                            <img className="img-fluid" src="/images/carousel(1)-2.webp" alt="The Last of us" />
                        </Link>
                    </div>
                    <div>
                        <Link className='Menu-option' to='/Women'>
                            <img className="img-fluid" src="/images/carousel(1)-3.webp" alt="The Last of us" />
                        </Link>
                    </div>
                </OwlCarousel >
            </div >
            <div className='second-carousel'>
                <h3>Shop By Category</h3>
                <OwlCarousel options={options2}  >
                    <div>
                        <Link className='Menu-option' to='/Men'>
                            <img className="img-fluid" src="/images/carousel(2)-1.webp" alt="The Last of us" href="/Men" />
                            <h4 >Kids</h4>
                        </Link>
                    </div>
                    <div>
                        <Link className='Menu-option' to='/Men'>
                            <img className="img-fluid" src="/images/carousel(2)-2.webp" alt="The Last of us" />
                            <h4>Women</h4>
                        </Link>

                    </div>
                    <div>
                        <Link className='Menu-option' to='/Men'>
                            <img className="img-fluid" src="/images/chasmah.webp" alt="The Last of us" />
                            <h4>Glasses</h4>
                        </Link>

                    </div>
                    <div>
                        <Link className='Menu-option' to='/Men'>
                            <img className="img-fluid" src="/images/clock.webp" alt="The Last of us" />
                            <h4>Clocks</h4>
                        </Link>

                    </div>
                    <div>
                        <Link className='Menu-option' to='/Men'>
                            <img className="img-fluid" src="/images/shoes.webp" alt="The Last of us" />
                            <h4>Shoes</h4>
                        </Link>

                    </div>
                    <div>
                        <Link className='Menu-option' to='/Men'>
                            <img className="img-fluid" src="/images/carousel(2)-5.webp" alt="The Last of us" />
                            <h4>Winter</h4>
                        </Link>

                    </div>
                </OwlCarousel >
            </div >

            <div className='border-line'></div>
            <Product />
            <div className='offer-area'>
                <div className='offer-img'>
                    <img className='img-fluid' src='/images/off-1.webp' alt='404 error'/>
                </div>
            </div>
            <Product2 />
            <div className='border-line'></div>
            <News />
            <div className='style-area'>
                <div className='row g-0'>
                    <div className='col-lg-4  col-md-6 col-sm-6 '>
                        <div className='style-box'>
                            <img className="img-fluid" src='/images/style-1.webp'  alt='404 error'/>
                            <h3>New Spring Knits</h3>
                            <p>Endleslly verstile new style that say yes to spring. the <br />season's looking bright</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6  col-sm-6 down-core'>
                        <div className='style-box'>
                            <h3>Down To The Core</h3>
                            <p>Endleslly verstile new style that say yes to spring. the <br />season's looking bright</p>
                            <img className="img-fluid" src='/images/style-2.webp'  alt='404 error'/>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6 winter-knites'>
                        <div className='style-box'>
                            <img className="img-fluid" src='/images/style-3.webp'  alt='404 error'/>
                            <h3>New Winter Knits</h3>
                            <p>Endleslly verstile new style that say yes to spring. the <br />season's looking bright</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Benefit-area'>
                <div className='row g-0'>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='Benefit-box'>
                            <i className="fa-solid fa-piggy-bank Benefit-icon"></i>
                            <h5>Savings</h5>
                            <p>If you don’t make your membership fee in savings,<br /> we’ll refund the difference</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='Benefit-box'>
                            <i className="fa-solid fa-mobile-screen-button  Benefit-icon"></i>
                            <h5>GTry it risk-free</h5>
                            <p>If you don’t make your membership fee in savings,<br /> we’ll refund the difference</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='Benefit-box'>
                            <i className="fa-solid fa-truck  Benefit-icon"></i>
                            <h5>Fast Delivery</h5>
                            <p>If you don’t make your membership fee in savings,<br /> we’ll refund the difference</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='Benefit-box Benefit-br'>
                            <i className="fa-solid fa-shirt Benefit-icon"></i>
                            <h5>1000+ products</h5>
                            <p>If you don’t make your membership fee in savings,<br /> we’ll refund the difference</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='person-area'>
                <div className='person-box'>
                    <h3>Talk To A Real Person</h3>
                    <p>Are you on the fence? Have a question? Need a recommendation?<br /> Member Services is always here to help. Send us a message.</p>
                    <img className='img-fluid' src='/images/support.webp' alt='404 error'/> <br />
                    <Button variant="dark" className='person-btn'>Chat With Member Services <i className="fa-regular fa-comment"></i></Button>
                </div>
            </div>
            <Footer />

        </>
    )
}
