import {Card, CardBody, CardFooter, CardHeader, Flex, Heading, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import {CalendarIcon} from "@chakra-ui/icons";

function Projects() {
    const projects = [
        {
            name: "Application web",
            description: "Une application web pour la gestion des services touristiques divers.",
            technology: "L'application web est développée avec Laravel, MySQL.",
            year: "2022",
        },
        {
            name: "JDM",
            description: "Une application web qui permet la location des voitures sportives.",
            technology: "L'application web est développée avec Django, PostgreSQL.",
            year: "2022",
        },
        {
            name: "GADJIT",
            description: "Une application de bureau qui permet la gestion des tickets clients pour les demandes de réparation de gadgets électroniques.",
            technology: "L'application bureau est développée avec .NET Framework, C#, Microsoft SQL Server",
            year: "2021",
        },
    ]

    return (
        <>
            <Header/>
            <Flex flexDirection="column" alignItems="center" gap={5}>
                {projects.map((project, index) => (
                    <Card key={index} mx={10} w={{sm: "450px", md: "600px"}}>
                        <CardHeader pb={1}>
                            <Heading size="md">{project.name}</Heading>
                        </CardHeader>
                        <CardBody py={1}>
                            <UnorderedList>
                                <ListItem>{project.description}</ListItem>
                                <ListItem>{project.technology}</ListItem>
                            </UnorderedList>
                        </CardBody>
                        <CardFooter pt={1}>
                            <Flex alignItems="center" gap={2}>
                                <CalendarIcon/>
                                <Text>{project.year}</Text>
                            </Flex>
                        </CardFooter>
                    </Card>
                ))}
            </Flex>
            <Footer/>
        </>
    )
}

export default Projects;