import React from 'react';
import './Home.css'

import offer1 from '../../Images/offering/fast-delivery.png'
import offer2 from '../../Images/offering/choose-food.png'
import offer3 from '../../Images/offering/best-offer.png'

import descImage1 from '../../Images/home-desc/app.png'
import descImage2 from '../../Images/home-desc/select-food.jpg'
import descImage3 from '../../Images/home-desc/food-delivery.jpg'
import descImage4 from '../../Images/home-desc/pay-info.png'

import playstore from '../../Images/home-desc/play-store.png'
import appstore from '../../Images/home-desc/appstore.png'
import appgalary from '../../Images/home-desc/appgalary.png'

// partners image
import partner1 from '../../Images/partner/partner-1.png'
import partner2 from '../../Images/partner/partner-2.png'
import partner3 from '../../Images/partner/partner-3.png'
import partner4 from '../../Images/partner/partner-4.png'
import partner5 from '../../Images/partner/partner-5.png'
import partner6 from '../../Images/partner/partner-6.png'
import partner7 from '../../Images/partner/partner-7.png'
import partner8 from '../../Images/partner/partner-8.png'
import partner9 from '../../Images/partner/partner-9.png'

// feedback 
import feedbackImg1 from '../../Images/feedback/person-1.webp'
import feedbackImg2 from '../../Images/feedback/person-2.webp'
import feedbackImg3 from '../../Images/feedback/person-3.webp'
import sideCard1 from '../../Images/side-card/side-card-1.jpg'
import sideCard2 from '../../Images/side-card/side-card-2.jpg'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <section>
            <div className='banner'>
                <div className="row">
                    <div className="col-md-5 title ">
                        
                            <div>
                                <h1 className='text-white'>Get Your Food in <br /> Less Than an Hour</h1>
                                <p className='d-none d-md-block text-white p'>With Eatsy food, get your food delivered <br/> to your doorstep within an hour!</p>
                            </div>
                        
                    </div>
                    <div className="col-md-7">

                    </div>
                </div>
            </div>
            </section>

            {/* offering part */}
            <section className='container margin-adjust'>
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <img className='img-fluid mb-2' src={offer1} alt="" />
                        </div>
                        <div className='text-center'>
                            <h2>Fastest <br /> Delivery</h2>
                            <p className='text-secondary p'>Get your food delivered in less than an hour! That’s as fast as it can get.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <img className='img-fluid mb-2' src={offer2} alt="" />
                        </div>
                        <div className='text-center'>
                            <h2>So Much to <br /> Choose From</h2>
                            <p className='text-secondary p'>Find your favourite among the thousands of restaurants in our app.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <img className='img-fluid mb-2' src={offer3} alt="" />
                        </div>
                        <div className='text-center'>
                            <h2>Best Offers <br /> In Town!</h2>
                            <p className='text-secondary p'>Get the best offers and combos at the best price only at Pathao Food!</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Offers */}
            <Services></Services>


            {/* Delivery Description */}
            <section className='container margin-adjust'>
                <div className="row g-5">

                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                        <h5>Get Food with</h5>
                        <h2 className='text-danger'>Eatsy Food</h2>
                        <br />
                        <h1 className='text-secondary'>01</h1>
                        <h1>Download the App</h1>
                        <p className='p'>Download the Pathao App and order your food online to get the fastest delivery.</p>
                        <div>
                            <a href="/" style={{textDecoration : 'none'}}> <img src={playstore} alt="" /> </a>
                            <a href="/" style={{textDecoration : 'none'}}> <img src={appstore} alt="" /> </a> 
                            <a href="/" style={{textDecoration : 'none'}}> <img src={appgalary} alt="" /> </a> 
                        </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img className='img-fluid' src={descImage1} alt="" />
                    </div>


                    <div className="col-md-6">
                        <img className='img-fluid' src={descImage2} alt="" />
                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                        <h1 className='text-secondary'>02</h1>
                        <h1>Select and set your food</h1>
                        <p className='p'>Select the food you want from thousands of restaurants.</p>
                        </div>
                    </div>


                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                        <h1 className='text-secondary'>03</h1>
                        <h1>Confirm your order and wait</h1>
                        <p className='p'>Just confirm your order and enjoy our fastest delivery. Fresh and delicious food will be delivered to your doorstep.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img className='img-fluid' src={descImage3} alt="" />
                    </div>


                    <div className="col-md-6">
                        <img className='img-fluid' src={descImage4} alt="" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                        <h1>Pay Cashless for your Food</h1>
                        <p className='p'>Have no cash? No worries! Pay digitally instead of cash.</p>
                        </div>
                    </div>
                    

                </div>
            </section>
            <br/><br />

            {/* Partners */}
            <section className='container margin-adjust'>
                <h1 className='my-5'>Some of our top partners</h1>
                <div className='row g-4'>
                    <div className="col-md-2">
                        <img className='img-fluid' src={partner1} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className='img-fluid' src={partner2} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className='img-fluid' src={partner3} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className='img-fluid' src={partner4} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className='img-fluid' src={partner5} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className='img-fluid' src={partner6} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className='img-fluid' src={partner7} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className='img-fluid' src={partner8} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className='img-fluid' src={partner9} alt="" />
                    </div>
                </div>
            </section>

            <br />

            {/* feedback */}
            <section className='margin-adjust container'>
                <div className="row">
                    <div className="col-md-6">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={feedbackImg1} class="d-block w-25 feedback-profiles mb-3 mx-auto" alt="..."/>
                        <div class="text-center">
                    <h5>Ashfia Ahmed</h5>
                    
                  </div>
                  <p>Loved the service! I urgently needed some stuffs and ordered it here and they delivered in less than an hour as promised! Thanks a lot for that. I am very grateful to have this service in our city. You make dinner a no-brainer on those crazy/lazy nights. I also wanted you to know that everyone of the delivery people have been the nicest and most polite people. Satisfied by their professionalism ! Got my tea bags in time. Didn't have to pay any delivery charge. I can't believe that. Keep it up !</p>
                    </div>
                        <div class="carousel-item">
                        <img src={feedbackImg2} class="d-block w-25 feedback-profiles mb-3 mx-auto" alt="..."/>
                        <div class="text-center">
                    <h5>Shampa Shahriyar</h5>
                    
                  </div>
                  <p>I want to order something (A perfume) for my mom at BD. Although the delivery area was out of their scope, their support team instantly replied to my query and manged to deliver the product. The best thing I noticed, they informed step by step updated news about the order processing.I'd like to acknowledge Food Delivery for their pleasanr help today when I called to place a last minute order for a meeting. I struggled with what to order and your team helped with selection and made everything easy for me.</p>
                    </div>
                        <div class="carousel-item">
                        <img src={feedbackImg3} class="d-block w-25 feedback-profiles mb-3 mx-auto" alt="..."/>
                        <div class="text-center">
                    <h5>Abedul Hoque Rakib</h5>
                    
                  </div>
                  <p>I have been shopping from Eatsy for the past few months and i am loving the experience. Have been shopping from here and i have recommended my relatives too. They are also happy with the service. The prices are comparatively low and the products are genuine. Your female employee on the phone was so kind yesterday! She took my order, got it exactly correct, and my food arrived. The delivery man was also very good. The level of service was also outstanding, thank you!</p>
                </div>
            </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
            </div>
                    </div>



                    
                    <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                        <div class="card mb-3" style={{maxWidth: "540px"}}>
                <div class="row g-0">
                    <div class="col-md-6">
                    <img src={sideCard1} class="img-fluid rounded-start h-100 p-3" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <h5 class="card-title">1st Time Registration?</h5>
                        <p class="card-text">For the first time in website registration, you will get 3 qoupns (2%, 3% and 5%). Register now and win these offer.</p>
        
                    </div>
                    </div>
                </div>
                    </div>
                        </div>
                        <div className="col-md-12">
                        <div class="card mb-3" style={{maxWidth: "540px"}}>
                <div class="row g-0">
                    <div class="col-md-6">
                    <img src={sideCard2} class="img-fluid rounded-start h-100 p-3" alt="..."/>
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <h5 class="card-title">Reference Offer</h5>
                        <p class="card-text">500 taka coupon free if you make a reference. The more references the more offers. LOOT NOW!!</p>
        
                </div>
                </div>
            </div>
                    </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;