import {Card, CardBody, CardFooter, CardHeader, Flex, Heading, Link, Text} from "@chakra-ui/react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {CalendarIcon, ExternalLinkIcon} from "@chakra-ui/icons";

function AcademicCareer() {
    const careers = [
        {
            status: "Ingénieur en informatique et réseau option MIAGE",
            school: {
                webpage: "https://www.emsi.ma/",
                name: "École Marocaine des Sciences de l'Ingénieur, Marrakech.",
            },
            duration: "2021 / 2024",
        },
        {
            status: "Technicien spécialisé en développement informatique",
            school: {
                webpage: "https://isgim.edupage.org/",
                name: "Institut Spécialisé en Gestion et d'Informatique, Marrakech.",
            },
            duration: "2019 / 2021",
        },
        {
            status: "Bac sciences physiques",
            school: {
                webpage: "https://goo.gl/maps/a93591mDpay8kY247",
                name: "Lycée Al Maghrib Al Arabi, Marrakech.",
            },
            duration: "2018 / 2019",
        },
    ]

    return (
        <>
            <Header/>
            <Flex flexDirection="column" alignItems="center" gap={5} mb={16}>
                {careers.map((career, index) => (
                    <Card key={index} mx={5} w={{sm: "450px", md: "600px"}}>
                        <CardHeader pb={1}>
                            <Heading size="md">{career.status}</Heading>
                        </CardHeader>
                        <CardBody py={1}>
                            <Link href={career.school.webpage} isExternal>
                                <Flex alignItems="center">
                                    <Text>{career.school.name}</Text>
                                    <ExternalLinkIcon mx='2px'/>
                                </Flex>
                            </Link>
                        </CardBody>
                        <CardFooter pt={1}>
                            <Flex alignItems="center" gap={2}>
                                <CalendarIcon/>
                                <Text>{career.duration}</Text>
                            </Flex>
                        </CardFooter>
                    </Card>
                ))}
            </Flex>
            <Footer/>
        </>
    )
}

export default AcademicCareer;