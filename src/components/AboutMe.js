import ProfileImg from "../assets/profile_img.jpeg";

const bodyStyle = {
    margin: "5% 7% 5% 7%"
};
const ProfileIconStyle = {
    backgroundImage: "ProfileImg",
    height: "75px",
    width: "75px",
    borderRadius: "50%",
};

const AboutMe = () => {

    return <div class="AboutMe">
        <div style={bodyStyle}>
            <h2>About Me</h2>
            <img src={ProfileImg} alt="Avatar" style={ProfileIconStyle}></img>
            <div>
                <p>Aenean id iaculis lorem, ut dapibus lorem. Praesent varius enim a magna aliquam pulvinar. Praesent tincidunt ipsum ipsum, in ornare ex laoreet sed. Vestibulum a tempor diam, ac suscipit lectus. Fusce convallis mollis nisl, quis consectetur eros tempus a. Phasellus porttitor vehicula mi eget pretium. Phasellus facilisis arcu et dignissim pulvinar. Vestibulum euismod tristique massa, ut porttitor ipsum tincidunt et. Curabitur vehicula lacinia cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam neque, bibendum et mauris a, aliquet maximus odio. Pellentesque blandit egestas diam, eu porta ligula dictum sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ac purus non orci feugiat semper.</p>
            </div>
        </div>
    </div >
}

export default AboutMe