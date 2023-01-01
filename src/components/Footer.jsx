import logo_white from '../assets/logo-white.svg'

export function Footer() {
    return (
        <footer>
            <div>
                <div><img src={logo_white} alt="logo-white"/></div>
                <div className="copyright">© 2020 Kasa. All rights reserved</div>
            </div>


        </footer>
    );
}