import { HStack, Spacer, Link } from '@chakra-ui/react'
import logo from '../../assets/logo.png'

const Navbar = () => {
    return(
        <HStack>
            <img src={logo} alt="" width="150px" />
            <Spacer />
            <HStack>
                <Link>Camisetas</Link>
                <Link>Shorts</Link>
                <Link>Buzos/Camperas</Link><Link/>
                <Link>Accesorios</Link>
                <FaShoppingCart></FaShoppingCart>
            </HStack>
        </HStack>
    )
}

export { Navbar }