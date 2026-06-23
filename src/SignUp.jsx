import { useState } from "react"

export function SignUp () {
    const [email, setIsEmail] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        if (!e.target.form.checkValidity()) return
        setIsEmail("Thank You!")
        setTimeout(() => {
            setIsEmail("")
        }, 3000)
    }
    return (
        <div className="sign-up-container">
            <h1>Join the VALERIUS Collective</h1>
            <p>Sign up to receive early access to new drops and exclusive member-only <br /> collections.</p>
            <form action="#">
                <input type="email" name="email" value={email} required placeholder="Your email address" onChange={(e) => setIsEmail(e.target.value) }/>
                <button type="submit" className="subscribe-btn" onClick={handleSubmit}>Subscribe</button>
            </form>
        </div>
    )
}