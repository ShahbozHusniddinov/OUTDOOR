import React from 'react'

const Aboutus = () => {
  return (
    <div className='max-width'>
        <div className='third-page'>
          <div className='third-img'>  
            <img src="img/third.png" alt="" />
          </div>
          <div className='third-page2'>
            <h3>Who are we?</h3>
            <h1>A bit about us.</h1>
            <p>We are an outdoor gear company focused on <br />  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nullam scelerisque aliquam odio <br /> et faucibus. Nulla rhoncus feugiat eros quis <br /> consectetur. Morbi neque ex, condimentum <br /> dapibus congue et.</p>
          </div>
        </div>


        <div className='second-three'>
              <div className='title'>
                  <h3>Our promise</h3>
                  <h1>Setting the bar for our products.</h1>
                  <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut <br /> ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi <br /> ultrices, ut faucibus orci tincidunt.</p>
              </div>

              <div className='card'>
                  <div className='cards'>
                      <img src="img/card.png" alt="" />
                      <h1>Sustainable sourcing</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim <br /> in eros elementum tristique. Lorem ipsum </p>
                  </div>
                  <div className='cards'>
                      <img src="img/card1.png" alt="" />
                      <h1>Sustainable sourcing</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim <br /> in eros elementum tristique. Lorem ipsum </p>
                  </div>
                  <div className='cards'>
                      <img src="img/card2.png" alt="" />
                      <h1>Sustainable sourcing</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim <br /> in eros elementum tristique. Lorem ipsum </p>
                  </div>
              </div>
              <div className='card1'>
                  <div className='cards'>
                      <img src="img/card3.png" alt="" />
                      <h1>Sustainable sourcing</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim <br /> in eros elementum tristique. Lorem ipsum </p>
                  </div>
                  <div className='cards'>
                      <img src="img/card4.png" alt="" />
                      <h1>Sustainable sourcing</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim <br /> in eros elementum tristique. Lorem ipsum </p>
                  </div>
                  <div className='cards'>
                      <img src="img/card5.png" alt="" />
                      <h1>Sustainable sourcing</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim <br /> in eros elementum tristique. Lorem ipsum </p>
                  </div>
              </div>
        </div>

        <div className='footer'>
            <div className='footer-bg'>
                <img src="img/first1.png" alt="" />
                <div className='futer'>

                <div className='footer-tags'>
                    <h3>Pages</h3>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>Categories</p>
                    <p>Buyer's guides</p>
                    <p>404</p>
                    <p>Password</p>
                </div>
                <div className='footer-tags'>
                    <h3>Gear categories</h3>
                    <p>Hiking Gear</p>
                    <p>Climbing Gear</p>
                    <p>Jackets</p>
                    <p>Accessories</p>
                    <p>Apparel</p>
                    <p>Headwear</p>
                </div>
                <div className='footer-tags'>
                    <h3>Company</h3>
                    <p>About us</p>
                    <p>Our team</p>
                    <p>Contact</p>
                    <p>Terms & Conditions</p>
                    <p>Style guide</p>
                    <p>Password</p>
                </div>
                <div className='footer-tags'>
                    <h3>Newsletter</h3>
                    <p>Subscribe to our (infrequent) newsletter where <br /> about upcoming listings and projects.</p>
                    <input type="text" placeholder='Email'/>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Aboutus