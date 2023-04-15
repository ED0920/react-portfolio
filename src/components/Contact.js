import { useState } from "react";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submit = () => {
        console.log(name)
    }

    return <div className="Contact">
        <Parent />
        <form className="bodyContainer" >
            <h2>Contact</h2>
            <h4>Name:</h4>
            <input
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
            />
            <h4>Email:</h4>
            <input
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            <h4>Message</h4>
            <input
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)} />
            <div>
                <button className="submit" onClick={() => submit()}>Submit</button>
            </div>
        </form>
    </div>
}


const Child = (props) => {
    return <div><p>{props.text}</p></div>
}

const Parent = () => {

    return <div><p>parent</p>
        <Child text={"this is a prop"} />
    </div>
}

export default Contact