const Footer = () => {
    return (
        <>
            <footer className="footer py-10 text-neutral-content bg-black">
                <div className="footer w-[95%] md:w-[85%] lg:w-[80%] mx-auto  flex justify-between">
                <nav>
                    <h6 className="footer-title text-lg">Services</h6>
                    <a className="link link-hover">Residential</a>
                    <a className="link link-hover">Commercial</a>
                    <a className="link link-hover">Industrial</a>
                    <a className="link link-hover">etc.</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-lg">Company</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Profile</a>
                    <a className="link link-hover">Login</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-lg">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                </div>
            </footer>
        </>
    );
};

export default Footer;