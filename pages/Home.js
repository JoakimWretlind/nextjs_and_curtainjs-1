import SimplePlane from "../components/simplePlane";
import { Curtains } from 'react-curtains';
import { Section, InnerContainer, H2, H1 } from "../components/pageStyles/pageStyle";

const HomePage = () => {
    return (
        <Curtains>
            <Section>
                <InnerContainer>
                    <H2>move the mouse</H2>
                    <H1>curtain</H1>
                    <SimplePlane />
                </InnerContainer>
            </Section>
        </Curtains >
    )
};

export default HomePage;
