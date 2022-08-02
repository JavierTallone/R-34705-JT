import { Heading } from '@chakra-ui/react'
import { ItemCount } from '../ItemCount'
const ItemListContainer = ({greeting}) => {

    return(
        <>
            <Heading>{greeting}</Heading>
            <ItemCount initial={1} stock={10} onAdd={() => {}} />
        </>
    )
}

export { ItemListContainer }