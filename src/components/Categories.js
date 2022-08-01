import React from 'react'

const Categories = () => {
  return (
    <div className='max-width'>
        <div className='title-m'>
            <h3>Buyer's guides</h3>
            <h1>Navigating our offering.</h1>
            <p>Morbi neque ex, condimentum dapibus congue et, vulputate ut <br /> ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi <br /> ultrices, ut faucibus orci tincidunt.</p>
            <div className="cards1">
                    <div className="kici">
                        <img src='img/let.png' alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc. <br /> Morbi cursus vitae tortor sapien, lectus sceleris<br /> porttitor. Dolor nulla bibendum </p>
                    </div>
                    <div className="kici">
                        <img src='img/let1.png' alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc. <br /> Morbi cursus vitae tortor sapien, lectus sceleris <br /> porttitor. Dolor nulla bibendum </p>
                    </div>
                </div>
        </div>
        <div className='third-page'>
          <div className='third-img'>  
            <img src="img/zzz.png" alt="" />
          </div>
          <div className='third-page2'>
            <h3>Who are we?</h3>
            <h1>A bit about us.</h1>
            <p>We are an outdoor gear company focused on <br />  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nullam scelerisque aliquam odio <br /> et faucibus. Nulla rhoncus feugiat eros quis <br /> consectetur. Morbi neque ex, condimentum <br /> dapibus congue et.</p>
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

export default Categories