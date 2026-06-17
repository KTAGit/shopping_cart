export function SignUp () {
    return (
        <div className="sign-up-container">
            <h1>Join the VALERIUS Collective</h1>
            <p>Sign up to receive early access to new drops and exclusive member-only <br /> collections.</p>
            <form action="#">
                <input type="email" name="email" required placeholder="Your email address"/>
                <button className="subscribe-btn">Subscribe</button>
            </form>
        </div>
    )
}