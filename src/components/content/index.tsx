
import Logo from '../logo'
import { Container, Title, Description, Item, SliderContainer, SubContainer, Title2, Description2, List } from './styled';
import Marquee from 'react-fast-marquee';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../card'
import { Assets } from '../../assets';

export default function index() {
    return (
        <Container>
            <Title>We are honored to contribute to your success</Title>
            <Marquee style={{ marginTop: 60, marginBottom: 60 }}>
                {Assets.logos.map(logo =>
                    <Logo src={logo} />
                )}
            </Marquee>
            <Description>
                We customize and combine tools and services based
                on your business's purpose and objectives to deliver tailored results
            </Description>
            <SubContainer>
                <Title2>Comprehensive research</Title2>
                <Description2>
                    Empower your decision-making, providing
                    a competitive edge in a data-centric market.
                </Description2>
                <List>
                    <Item>
                        Qualitative research is a collecting and analyzing non-numerical data to understand concepts, opinions, or experiences
                    </Item>
                    <Item>
                        Quantitative research methods is an objective measurement and numerical analysis of data collected through polls, questionnaires, and surveys
                    </Item>
                </List>
            </SubContainer>
            <SliderContainer>
                <Swiper
                    loop
                    spaceBetween={15}
                    slidesPerView={'auto'}
                    initialSlide={0}
                    slidesOffsetBefore={window.innerWidth > 1200 ? (window.innerWidth - 1200) / 4 : 10}
                    // slidesOffsetBefore={100}
                    onSlideChange={() => console.log('slide change')}
                    //@ts-ignore
                    onSwiper={(swiper: Swiper) => console.log(swiper)}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 90
                        },
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                    }}
                >
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                </Swiper>
            </SliderContainer>
        </Container>

    )
}
