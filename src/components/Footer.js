import React from 'react';

function Footer(){
    return (
        <footer className="footer">
            <section className="footer__terms">
                <a href="terms.html">Terms and Conditions</a>
                <a href="privacy.html">Privacy Policy</a>
                <a href="contact.html">Contact Us</a>
            </section>
            <section className="footer__social">
                <a href="/">Follow Us</a>
                <a href="http://www.facebook.com"><i className="fa fa-facebook-square"></i></a>
                <a href="http://www.twitter.com"><i className="fa fa-twitter"></i></a>
            </section>
        </footer>
    )
}

export default Footer;