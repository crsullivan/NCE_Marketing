import React from 'react';

function Footer1() {
    return (
        <footer className="footer-main">
            <div className="copyright">Copyright © {new Date().getFullYear()} NCE INC - All Rights Reserved.</div>
            <div className="footer-links">
                <a class="fab fa-instagram fa-2x"></a>
                <a class="fab fa-linkedin-in fa-2x"></a>
                <a class="fab fa-twitter fa-2x"></a>
            </div>
        </footer>
    );
  }
  
  export default Footer1;