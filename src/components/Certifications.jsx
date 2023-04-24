import Header from "./Header.jsx";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    Image,
    ListItem,
    Text,
    UnorderedList
} from "@chakra-ui/react";
import Footer from "./Footer";
import {CalendarIcon, ExternalLinkIcon} from "@chakra-ui/icons";
import {renderDate} from "../utils.js";
import courseraJV688FZV4HLS from "../assets/certifications/Coursera JV688FZV4HLS.jpg";
import courseraW8MUGZSEBQUQ from "../assets/certifications/Coursera W8MUGZSEBQUQ.jpg";
import laravelC9B91866 from "../assets/certifications/laravel.png";
import courseraSRF9Q3GGE9RK from "../assets/certifications/Coursera SRF9Q3GGE9RK.jpg";
import coursera7WKEB6EAUKGL from "../assets/certifications/Coursera 7WKEB6EAUKGL.jpg";
import courseraPTMQZJ45VEYM from "../assets/certifications/Coursera PTMQZJ45VEYM.jpg";
import courseraGLV65EUFVNZZ from "../assets/certifications/Coursera GLV65EUFVNZZ.jpg";

function Certifications() {
    const certifications = [
        {
            name: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
            issuingOrg: "Coursera",
            credentialID: "GLV65EUFVNZZ",
            credentialURL: "https://www.coursera.org/account/accomplishments/certificate/GLV65EUFVNZZ",
            image: courseraGLV65EUFVNZZ,
            issueDate: new Date("January 2023"),
            width: 350,
            height: 250,
        },
        {
            name: "Advanced React",
            issuingOrg: "Coursera",
            credentialID: "PTMQZJ45VEYM",
            credentialURL: "https://www.coursera.org/account/accomplishments/certificate/PTMQZJ45VEYM",
            image: courseraPTMQZJ45VEYM,
            issueDate: new Date("February 2023"),
            width: 350,
            height: 250,
        },
        {
            name: "Front-End Web Development with React",
            issuingOrg: "Coursera",
            credentialID: "7WKEB6EAUKGL",
            credentialURL: "https://www.coursera.org/account/accomplishments/certificate/7WKEB6EAUKGL",
            image: coursera7WKEB6EAUKGL,
            issueDate: new Date("January 2023"),
            width: 350,
            height: 250,
        },
        {
            name: "DevOps, Cloud, and Agile Foundations Specialization",
            issuingOrg: "Coursera",
            credentialID: "SRF9Q3GGE9RK",
            credentialURL: "https://www.coursera.org/account/accomplishments/specialization/certificate/SRF9Q3GGE9RK",
            image: courseraSRF9Q3GGE9RK,
            issueDate: new Date("March 2023"),
            width: 350,
            height: 250,
        },
        {
            name: "Laravel",
            issuingOrg: "Bright Coding",
            credentialID: "C9B91866",
            credentialURL: "https://brightcoding.dev/certificate/ali-almai/C9B91866",
            image: laravelC9B91866,
            issueDate: new Date("February 2023"),
            width: 200,
            height: 250,
        },
        {
            name: "Data Collection and Processing with Python",
            issuingOrg: "Coursera",
            credentialID: "JV688FZV4HLS",
            image: courseraJV688FZV4HLS,
            credentialURL: "https://www.coursera.org/account/accomplishments/certificate/JV688FZV4HLS",
            issueDate: new Date("May 2022"),
            width: 350,
            height: 250,
        },
        {
            name: "Python Functions, Files, and Dictionaries",
            issuingOrg: "Coursera",
            credentialID: "W8MUGZSEBQUQ",
            credentialURL: "https://www.coursera.org/account/accomplishments/certificate/W8MUGZSEBQUQ",
            image: courseraW8MUGZSEBQUQ,
            issueDate: new Date("May 2022"),
            width: 350,
            height: 250,
        },
    ];

    return (
        <>
            <Header/>
                <Flex flexWrap="wrap" justifyContent="center" alignItems="center" mx="auto" px={10} gap={5} mb={16}
                      maxW={1200}>
                    {certifications
                        .sort((c1, c2) => c2.issueDate - c1.issueDate)
                        .map((certification, index) => (
                            <Card key={index} w={certification.width} h={425}>
                                <Image src={certification.image} w={certification.width} h={certification.height}
                                       borderRadius='lg'
                                       alt={certification.issuingOrg + ' ' + certification.credentialID}/>
                                <CardHeader pb={1} cursor="pointer"
                                            onClick={() => window.open(certification.credentialURL, "_blank")}>
                                    <Flex alignItems="center">
                                        <Heading size="md" flexGrow={1}>{certification.name}</Heading>
                                        <ExternalLinkIcon mx='2px'/>
                                    </Flex>
                                </CardHeader>
                                <CardBody py={1}>
                                    <UnorderedList>
                                        <ListItem>{certification.issuingOrg}</ListItem>
                                        <ListItem>ID d'identification: {certification.credentialID}</ListItem>
                                    </UnorderedList>
                                </CardBody>
                                <CardFooter pt={1} w="full">
                                    <Flex alignItems="center" gap={2}>
                                        <CalendarIcon/>
                                        <Text>{renderDate(certification.issueDate, {
                                            year: 'numeric',
                                            month: 'long'
                                        })}</Text>
                                    </Flex>
                                </CardFooter>
                            </Card>
                        ))}
                </Flex>
            <Footer/>
        </>
    )
}

export default Certifications;