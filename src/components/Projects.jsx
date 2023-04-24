import {Card, CardBody, CardFooter, CardHeader, Flex, Heading, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {CalendarIcon, ExternalLinkIcon} from "@chakra-ui/icons";
import {renderDate} from "../utils.js";

function Projects() {
    const projects = [
        {
            name: "Gestion de la domotique",
            description: "Une application bureau qui permet la gestion gestion de la domotique.",
            technology: "L'application bureau est développée avec .NET, C#, Entity Framework, MySQL.",
            url: "https://github.com/voidnowhere/HomeAutomation",
            date: new Date("2022-12"),
        },
        {
            name: "Gestion des projets informatique",
            description: "Une application bureau qui permet la gestion des projets informatiques (Kanban).",
            technology: "L'application bureau est développée avec .NET, C#, Entity Framework, Microsoft SQL Server.",
            url: "https://github.com/voidnowhere/ProjectsManagement",
            date: new Date("2023-01"),
        },
        {
            name: "Gestion d'un cabinet médical",
            description: "Une application bureau qui permet la gestion d'un cabinet médical.",
            technology: "L'application bureau est développée avec JAVA, Swing, Hibernate, MySQL.",
            url: "https://github.com/voidnowhere/MedicalOfficeManagement",
            date: new Date("2023-01"),
        },
        {
            name: "Gestion d'une bibliothèque.",
            description: "Une application bureau qui permet la gestion d'une bibliothèque.",
            technology: "L'application bureau est développée avec .NET, C#, Entity Framework, MySQL.",
            url: "https://github.com/voidnowhere/LibraryManagement",
            date: new Date("2022-12"),
        },
        {
            name: "Pokemon",
            description: "Une application mobile android qui liste les pokémon d'après un site web.",
            technology: "L'application mobile est développée avec JAVA, Volley.",
            url: "https://github.com/voidnowhere/PokemonAndroidAPP",
            date: new Date("2023-04"),
        },
        {
            name: "Gestion des services touristiques divers",
            description: "Une application web pour la gestion des services touristiques divers.",
            technology: "L'application web est développée avec Laravel, MySQL, Tailwind CSS.",
            url: null,
            date: new Date("2022-10"),
        },
        {
            name: "Location des voitures sportives",
            description: "Une application web qui permet la location des voitures sportives.",
            technology: "L'application web est développée avec Django, PostgreSQL, Bootstrap.",
            url: null,
            date: new Date("2022-06"),
        },
        {
            name: "Gestion des tickets pour réparation de gadgets électroniques",
            description: "Une application bureau qui permet la gestion des tickets clients pour les demandes de réparation de gadgets électroniques.",
            technology: "L'application bureau est développée avec .NET Framework, C#, Microsoft SQL Server.",
            url: null,
            date: new Date("2021-06"),
        },
    ]

    return (
        <>
            <Header/>
            <Flex flexWrap="wrap" justifyContent="center" gap={5} mb={16} mx="auto" maxW={1500}>
                {projects
                    .sort((p1, p2) => p2.date - p1.date)
                    .map((project, index) => (
                        <Card key={index} mx={5} w={{sm: "450px", md: "600px"}}>
                            <CardHeader pb={1}>
                                <Flex alignItems="center" gap={1} cursor={(project.url) ? "pointer" : "default"}
                                      onClick={() => (project.url) ? window.open(project.url, "_blank") : null}>
                                    <Heading size="md">
                                        {project.name}
                                    </Heading>
                                    {
                                        project.url
                                        &&
                                        <ExternalLinkIcon mx='2px'/>
                                    }
                                </Flex>
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
                                    <Text>{renderDate(project.date, {year: 'numeric', month: 'long'})}</Text>
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