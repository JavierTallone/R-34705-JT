import { VStack, Button, Text, Text, Image, Link } from ' @chakra-ui/react'

const ItemList = ({ product }) => {

    console.log(product)

    return(
        <VStack boxShadow='lg' p='6' rounded='md' bg='white' m="15px" minWidth="275px">
            <Image src={product.image} alt={product.product} w="100px"/>
            <Text>{product.product}</Text>
            <Text>{product.price}</Text>
            <Button colorScheme='blue' size='xs'>
                <Link>Ver</Link>
            </Button>
        </VStack>
    )
}

export { Item }