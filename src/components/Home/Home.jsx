//CSS..............................
import './Home.css'

//Images...........................
import MyPic from '../../res/MyPhoto.png'

//Icons............................
import { SocialIcon } from 'react-social-icons'



const Home = () => {
  return (
    <div className='home'>
        <div className='home-intro'>
            <div>
                <h4>I am</h4>
                <h1>Arghya Adhikari</h1>
                <h6>Stuent of <b>Heritage Institute of Technology</b></h6>
                <div className='home-social'>
                    <SocialIcon url="https://www.facebook.com/arghya.adhikari.549"/>
                    <SocialIcon url="https://www.instagram.com/arghya0010"/>
                    <SocialIcon url="https://www.linkedin.com/in/arghya-adhikari-930aa1253"/>
                    <SocialIcon url="https://github.com/XTEREMO"/>
                </div>
            </div>
        </div>
        <div className='home-img'>
            <img src={MyPic} width={400} />
        </div>
    </div>
  )
}

export default Home