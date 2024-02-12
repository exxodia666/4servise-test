import React, { FC } from 'react'
import { Container, Image } from './styled'

const Logo: FC<{ src: string }> = ({ src }) => {
    return (
        <Container>
            <Image src={src} />
        </Container>
    )
}


export default Logo;