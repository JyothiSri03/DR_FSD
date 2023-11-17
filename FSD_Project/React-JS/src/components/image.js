import Thub from './thub.jpg'
import Trainee from '../trainee.png'
const Image = () =>
{
    return(
        <>
            <img src={Thub} alt=" " style={{height:'300px',width:'350px'}}/>
            <img src={Trainee} alt=" " style={{height:'300px',width:'350px'}}/>
            <img src="/logo512.png" alt=" " style={{height:'300px',width:'350px'}}/>
        </>
    )
}
export default Image;