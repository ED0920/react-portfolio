import { ReactComponent as GithubSvg } from '../icons/github.svg';
import { ReactComponent as LinkedinSvg } from '../icons/linkedin.svg';
import { ReactComponent as StackoverflowSvg } from '../icons/stackoverflow.svg'


const Footer = () => {

    return <div class="footer">
        <footer>
            <a href="https://github.com/ED0920"><GithubSvg /></a>
            <a href="https://www.linkedin.com/in/elisa-do-a76a7a115/"><LinkedinSvg /></a>
            <a href="https://stackoverflow.com/users/21643146/ed0920"><StackoverflowSvg /></a>
        </footer>
    </div >
}

export default Footer