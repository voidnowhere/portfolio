import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    Link,
    ListItem,
    Text,
    UnorderedList
} from "@chakra-ui/react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {CalendarIcon, ExternalLinkIcon} from "@chakra-ui/icons";

function Experiences() {
    const experiences = [
        {
            status: "Stagiaire",
            content: "Realisation d'une application web pour la gestion des services touristiques divers.",
            technology: "L'application web est développée avec Laravel, MySQL.",
            reception: {
                name: "NETDEV Sarl, Marrakech.",
                webpage: "https://www.netdevmaroc.com/",
            },
            duration: "11 Juillet 2022 / 12 Septembre 2022",
        },
    ]

    return (
        <>
            <Header/>
            <Flex flexDirection="column" alignItems="center" gap={5} mb={16}>
                {experiences.map((experience, index) => (
                    <Card key={index} mx={5} w={{sm: "450px", md: "600px"}}>
                        <CardHeader pb={1}>
                            <Flex alignItems="center">
                                <Heading size="md">
                                    <Link href={experience.reception.webpage} isExternal>
                                        <Text>{experience.reception.name}</Text>
                                    </Link>
                                </Heading>
                                <ExternalLinkIcon mx='2px'/>
                            </Flex>
                            <Text>{experience.status}</Text>
                        </CardHeader>
                        <CardBody py={1}>
                            <UnorderedList>
                                <ListItem>{experience.content}</ListItem>
                                <ListItem>{experience.technology}.</ListItem>
                            </UnorderedList>
                        </CardBody>
                        <CardFooter pt={1}>
                            <Flex alignItems="center" gap={2}>
                                <CalendarIcon/>
                                <Text>{experience.duration}</Text>
                            </Flex>
                        </CardFooter>
                    </Card>
                ))}
            </Flex>
            <Footer/>
        </>
    )
}

export default Experiences;