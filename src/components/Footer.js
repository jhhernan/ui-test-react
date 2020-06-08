import React from 'react';

function Footer(){
    return (
        <footer className="footer">
            <section className="footer__terms">
                <a href="">Terms and Conditions</a>
                <a href="">Privacy Policy</a>
                <a href="">Contact Us</a>
            </section>
            <section className="footer__social">
                <a href="">Follow Us</a>
                <a href="www.facebook.com"><i className="fa fa-facebook-square"></i></a>
                <a href="www.twitter.com"><i className="fa fa-twitter"></i></a>
            </section>
        </footer>
    )
}

export default Footer;