import React from 'react'

const Shop = () => {
  return (
    <div className='max-width'>
        <div className='body-one'>
            <div className='body-text'>
              <h3>OUTDOOR EXPLORATION</h3>
              <h1>Gear for when it <br /> actually matters.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique.</p>
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

export default Shop;