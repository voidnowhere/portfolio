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
import {renderDate} from "../utils.js";

function Projects() {
    const projects = [
        {
            name: "Serveur de chat",
            description: "Une application desktop qui agit comme un serveur de discussion de groupe dans lequel les clients se joignent pour communiquer.",
            technology: "L'application desktop est développée avec C++.",
            url: "https://github.com/AKAM-VNW/ChatAppServer",
            date: new Date("2021-12"),
        },
        {
            name: "Recommandations de restaurants",
            description: "Une application Web qui permet aux utilisateurs d'évaluer les restaurants récupérés et stockés par notre application à partir d'un site Web en ligne.",
            technology: "L'application web est développée avec Django, React.",
            url: "https://github.com/voidnowhere/RestaurantReviewsWEB",
            date: new Date("2023-05"),
        },
        {
            name: "Gestion de la domotique",
            description: "Une application bureau qui permet la gestion gestion de la domotique.",
            technology: "L'application bureau est développée avec  C#, .NET WPF, Entity Framework Core, MySQL.",
            url: "https://github.com/voidnowhere/HomeAutomation",
            date: new Date("2022-12"),
        },
        {
            name: "Gestion des projets informatique",
            description: "Une application bureau qui permet la gestion des projets informatiques (Kanban).",
            technology: "L'application bureau est développée avec  C#, .NET WinForms, Entity Framework Core, Microsoft SQL Server.",
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
            technology: "L'application bureau est développée avec  C#, .NET WinForms, Entity Framework Core, MySQL.",
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
            url: "https://github.com/voidnowhere/travel-agency",
            date: new Date("2022-10"),
        },
        {
            name: "Location des voitures sportives",
            description: "Une application web qui permet la location des voitures sportives.",
            technology: "L'application web est développée avec Django, PostgreSQL, Bootstrap.",
            url: "https://github.com/MOtAkAli/JDM",
            date: new Date("2022-06"),
        },
        {
            name: "Gestion des tickets pour réparation de gadgets électroniques",
            description: "Une application bureau qui permet la gestion des tickets clients pour les demandes de réparation de gadgets électroniques.",
            technology: "L'application bureau est développée avec C#, .NET Framework WinForms, ADO.NET, Microsoft SQL Server, SAP Crystal Reports.",
            url: "https://github.com/voidnowhere/GADJIT-WIN-APP",
            date: new Date("2021-06"),
        },
        {
            name: "Localisation des pharmacies",
            description: "Une application Web et mobile où vous pouvez trouver les pharmacies les plus proches et aussi permettre au pharmacien d’ajouter sa pharmacie et configurer la disponibilité.",
            technology: "L'application est développée avec Spring Boot, React, Flutter, MySQL.",
            url: "https://github.com/voidnowhere/PharmacyFinderAPI",
            date: new Date("2023-05"),
        },
        {
            name: "Réservation des terrains de foot",
            description: "Application web où les joueurs peuvent réserver des terrains, rejoindre les réservations et aussi les terrains sont gérés par leurs propriétaires.",
            technology: "L'application web est développée avec Django, React, PostgreSQL.",
            url: "https://github.com/voidnowhere/FFRM_API",
            date: new Date("2023-05"),
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
                                <Flex alignItems="center">
                                    <Heading size="md">
                                        <Link href={project.url} isExternal>
                                            <Text>{project.name}</Text>
                                        </Link>
                                    </Heading>
                                    <ExternalLinkIcon mx='2px'/>
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