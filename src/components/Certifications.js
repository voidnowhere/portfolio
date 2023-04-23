import Header from "./Header";
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
import courseraJV688FZV4HLS from "../assets/certifications/Coursera JV688FZV4HLS.jpg";
import courseraW8MUGZSEBQUQ from "../assets/certifications/Coursera W8MUGZSEBQUQ.jpg";
import laravelC9B91866 from "../assets/certifications/laravel.png";
import {CalendarIcon, ExternalLinkIcon} from "@chakra-ui/icons";

function Certifications() {
    const certifications = [
        {
            name: "Laravel",
            issuingOrg: "Bright Coding",
            credentialID: "C9B91866",
            credentialURL: "https://brightcoding.dev/certificate/ali-almai/C9B91866",
            image: laravelC9B91866,
            issueDate: "Février 2023",
            width: 200,
            height: 250,
        },
        {
            name: "Data Collection and Processing with Python",
            issuingOrg: "Coursera",
            credentialID: "JV688FZV4HLS",
            image: courseraJV688FZV4HLS,
            credentialURL: "https://www.coursera.org/account/accomplishments/certificate/JV688FZV4HLS",
            issueDate: "Mai 2022",
            width: 350,
            height: 250,
        },
        {
            name: "Python Functions, Files, and Dictionaries",
            issuingOrg: "Coursera",
            credentialID: "W8MUGZSEBQUQ",
            credentialURL: "https://www.coursera.org/account/accomplishments/certificate/W8MUGZSEBQUQ",
            image: courseraW8MUGZSEBQUQ,
            issueDate: "Mai 2022",
            width: 350,
            height: 250,
        },
    ];

    return (
        <>
            <Header/>
            <Flex flexWrap="wrap" justifyContent="center" px={10} gap={5} mb={16}>
                {certifications.map((certification, index) => (
                    <Card key={index} w={certification.width} cursor="pointer"
                          onClick={() => window.open(certification.credentialURL, "_blank")}>
                        <Image src={certification.image} w={certification.width} h={certification.height}
                               borderRadius='lg' alt={certification.issuingOrg + ' ' + certification.credentialID}/>
                        <CardHeader pb={1}>
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
                                <Text>{certification.issueDate}</Text>
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