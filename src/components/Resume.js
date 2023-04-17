const body = {
    minHeight: '60vh',
}


const Resume = () => {
    return <div>
        <div class="bodyContainer" style={body}>
            <div>Download my <a href="www.google.com">resume</a></div>
            <div>
                <h3>Font-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySql, Sequalize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>

            </div>
        </div>
    </div>
}

export default Resume