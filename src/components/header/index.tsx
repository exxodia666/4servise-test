import React from 'react'
import { LangSelector, Row, Header as StyledHeader, Logo, Tagline } from './styled';
import { Assets } from '../../assets';

export default function Header() {
    return (
        <StyledHeader>
            <Row>
                <Logo src={Assets.logo} />
                <Tagline>Light it up</Tagline>
            </Row>
            <LangSelector>EN</LangSelector>
        </StyledHeader>
    )
}
