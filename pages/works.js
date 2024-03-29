import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import tulungThumbnail from "../public/images/tulung.jpg"
import washengThumbnail from "../public/images/washeng.jpg"
import enisanThumbnail from "../public/images/enisan.png"

const Works = () => {
    return (
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid column={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id='https://play.google.com/store/apps/details?id=com.pixeldev.tulung&hl=en_US&gl=US' title='Tulung' thumbnail={tulungThumbnail}>
                        App for asking and giving help for PT. Antropos Digital Indonesia
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='https://play.google.com/store/apps/details?id=com.washeng.transporter_dev&hl=en_US&gl=US' title='Washeng' thumbnail={washengThumbnail}>
                        Shipment app for PT. Washeng Keke Mandiri
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='https://enisan.id/' title='Enisan' thumbnail={enisanThumbnail}>
                        Website that saves the memories with our beloved ones that has passed away
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works