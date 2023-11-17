import {Link} from 'react-router-dom'
function Menu()
{
    return(
        <>
        <Link to='/home'>Home || </Link>
        <Link to='/about'>About ||</Link>
        <Link to='/service'>Services ||</Link>
        <Link to='/contact'>Contact ||</Link>
        <Link to='/student'>Student ||</Link>
        <Link to='/trainees'>Trainees ||</Link>
        <Link to='/events'>Events ||</Link>
        <Link to='/events1'>Events1 ||</Link>
        <Link to='/task'>Task ||</Link>
        <Link to='/incdec'>Inc_Dec ||</Link>
        <Link to='/hooks'>Hooks ||</Link>
        <Link to='/hooks1'>Hooks1 ||</Link>
        <Link to='/fruits'>Fruits ||</Link>
        <Link to='/newproduct'>NewProduct ||</Link>
        <Link to='/products1'>Product1 ||</Link>
        </>
    )
}
export default Menu;