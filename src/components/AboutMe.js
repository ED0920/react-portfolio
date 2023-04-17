import ProfileImg from "../assets/profile_img.jpeg";

const bodyStyle = {
    margin: "5% 7% 5% 7%",
    minHeight: "60vh"
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
                <p>“Elisa is a Commericial Exec at ScentreGroup Westfield with more than 5 years experience in the commerical real estate and shopping centre industry.  Specializing in commerical contracts, commercial pop up stores & in centre marketing activations. Elisa uses that experience to enhance customer experience with Westfield Living Centres.  </p>
            </div>
        </div>
    </div >
}

export default AboutMe