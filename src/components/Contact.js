import { useState } from "react";

const textBox1 = {
    height: "25px",
};

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState("");

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }
        console.log(name);
        // continue with form submission
    };

    return (
        <div className="Contact">
            <form className="bodyContainer" onSubmit={handleSubmit}>
                <h2>Contact</h2>
                <h4>Name:</h4>
                <input
                    style={textBox1}
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <h4>Email:</h4>
                <input
                    style={textBox1}
                    value={email}
                    required
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError && validateEmail(e.target.value)) {
                            setEmailError("");
                        }
                    }}
                />
                {emailError && <p>{emailError}</p>}
                <h4>Message</h4>
                <input
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div>
                    <button className="submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
