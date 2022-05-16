import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import tulungThumbnail from "../public/images/tulung.jpg"
import washengThumbnail from "../public/images/washeng.jpg"

const Works = () => {
    return (
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid column={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id='tulung' title='Tulung' thumbnail={tulungThumbnail}>
                        App for asking and giving help for PT. Antropos Digital Indonesia
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='washeng' title='Washeng' thumbnail={washengThumbnail}>
                        Shipment app for PT. Washeng Keke Mandiri
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works