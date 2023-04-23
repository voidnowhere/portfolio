import {Avatar, Box, Flex, Heading, Link} from "@chakra-ui/react";
import {Link as ReachLink, useMatch} from "react-router-dom";
import myImage from "../assets/images/me.jpg"

function Header() {
    return (
        <header>
            <Box bgGradient="linear(to-r, #43cea2, #185a9d)" py={10}>
                <Flex flexDirection="column" alignItems="center" gap={3}>
                    <Avatar size="2xl" src={myImage}/>
                    <Heading size="md" color="ghostwhite">ALMAI Ali</Heading>
                    <Heading size="md" color="ghostwhite">Futur ingénieur en Informatique</Heading>
                </Flex>
            </Box>
            <Flex as="nav" py={5} justifyContent="center" flexWrap="wrap" gap={5}>
                <Link as={ReachLink} to="/" fontSize={16} boxShadow="inner" borderWidth={1} rounded="lg" px={4} py={2}
                      fontWeight={useMatch("/") ? "bold" : "normal"}
                >Accueil</Link>
                <Link as={ReachLink} to="/formations" fontSize={16} boxShadow="inner" borderWidth={1} rounded="lg"
                      px={4} py={2} fontWeight={useMatch("/formations") ? "bold" : "normal"}
                >Formations</Link>
                <Link as={ReachLink} to="/experiences" fontSize={16} boxShadow="inner" borderWidth={1} rounded="lg"
                      px={4} py={2} fontWeight={useMatch("/experiences") ? "bold" : "normal"}
                >Expériences</Link>
                <Link as={ReachLink} to="/projets" fontSize={16} boxShadow="inner" borderWidth={1} rounded="lg" px={4}
                      py={2} fontWeight={useMatch("/projets") ? "bold" : "normal"}
                >Projets</Link>
                <Link as={ReachLink} to="/certifications" fontSize={16} boxShadow="inner" borderWidth={1} rounded="lg"
                      px={4} py={2} fontWeight={useMatch("/certifications") ? "bold" : "normal"}
                >Certifications</Link>
            </Flex>
        </header>
    )
}

export default Header;