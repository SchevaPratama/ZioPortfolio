import { Button, Box, Container, Heading, Image, useColorModeValue, SimpleGrid, List, ListItem, Link, Icon } from '@chakra-ui/react'
import NextLink from "next/link"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={5} mb={6} align="center" >
                Hello I&apos;m a mobile developer based in Banyuwangi, Indonesia
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Scheva Pratama
                    </Heading>
                    <p>Mobile & Backend Developer</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="xl"
                        src="images/zo.jpg"
                        alt="Profile Photo"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as='h3' variant='section-title'>
                    Work
                </Heading>
                <Paragraph>Hello, My name is Scheva Fitrah Pratama and I'm a software engineer that interested Dart on framework flutter and php on laravel framework, I'm comfortable and mostly working on back-end development. Technologies I usually use is Dart and Laravel.
                    I mostly work as a Freelance and remote worker because I like working with flexible time and place
                    I have a GitHub account, that I mostly use to save my project when I’m learning some topic or doing some work
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="facebook">
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as='h3' variant='section-title'>
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2003</BioYear>
                    Born in Banyuwangi, Indonesia
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Graduated from SMK Negeri 1 Banyuwangi at Sofware Engineer major
                </BioSection>
                <BioSection>
                    <BioYear>2021 To Present</BioYear>
                    Work as a freelancer
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as='h3' variant='section-title'>
                    Find Me On
                </Heading>
                <List>
                    <ListItem>
                        <Link href='https://github.com/SchevaPratama' target='_blank'>
                            <Button colorScheme='facebook' variant='ghost' leftIcon={<Icon as={IoLogoGithub} />}>
                                Scheva Pratama
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://www.facebook.com/scheva.pratama.7/' target='_blank'>
                            <Button colorScheme='facebook' variant='ghost' leftIcon={<Icon as={IoLogoFacebook} />}>
                                Scheva Pratama
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://www.instagram.com/zordievsz/' target='_blank'>
                            <Button colorScheme='facebook' variant='ghost' leftIcon={<Icon as={IoLogoInstagram} />}>
                                @zordievsz
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://www.linkedin.com/in/scheva-pratama-889831213/' target='_blank'>
                            <Button colorScheme='facebook' variant='ghost' leftIcon={<Icon as={IoLogoLinkedin} />}>
                                Scheva Pratama
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
    )
}

export default Page