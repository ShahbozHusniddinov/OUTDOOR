import React from 'react'

const Buy = () => {
  return (
    <div className='max-width'>
      <div className='bgg'>
      </div>
      <div className='bggg'>
        <div className='bg1'>
            <h3>Shop</h3>
            <h1>Check out our products.</h1>
            <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut <br /> ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi <br /> ultrices, ut faucibus orci tincidunt.</p>
            <button className='bg-btn'><a href="#">Visit shop</a> </button>
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

export default Buy