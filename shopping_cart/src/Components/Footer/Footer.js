import React from 'react'
import './Footer.css'
import BackToTop from 'react-back-to-top-button';

function Footer() {
    return (
        <div className="footer">
            <div className="tab">
                <div className="first-lst">
                <dl >
                    <dt>SUPPORT</dt>
                        <dd>online help</dd>
                        <dd>customer service</dd>
                        <dd>shipping FAQ</dd>
                        <dd>service centers</dd>
                        <dd>warranty</dd>
                        <dd>user guid</dd>
                    </dl>
                </div>
                <div className="second-lst">
                <dl>
                <dt>CONTACT US</dt>
                    
                        <dd>facebook</dd>
                        <dd>twitter</dd>
                        <dd>instagram</dd>
                    </dl>
                </div>
                <div className="third-lst">
                <dl>
                <dt>HELP</dt>
                    
                        <dd>online help</dd>
                </dl>
                </div>
            </div>
           
            <img src="https://th.bing.com/th/id/OIP.lgRHdaaiZztqtUG7sN53DQHaHa?w=167&h=180&c=7&r=0&o=5&pid=1.7" alt="logo" className="logo-img" ></img>
            
            <p className="countries">Australia , Brazil,  Canada,  China,  France,  Germany,  Italy,  Japan,  Mexico,  Netherlands,  Poland,  Singapore,   Spain,  Turkey,  United Arab Emirates,  United Kingdom,  United States</p>
            <BackToTop
            showOnScrollDown
            scrollTo={0}
            showAt={100}
            speed={1500}
            easing="easeInOutQuint"
            >
   <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>
              </BackToTop>
        </div>
    )
}

export default Footer
