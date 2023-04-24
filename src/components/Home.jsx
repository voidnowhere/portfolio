import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Card, CardBody, Center, Text} from "@chakra-ui/react";

function Home() {
    return (
        <>
            <Header/>
            <Center>
                <Card mx={10} w={{sm: "450px", md: "600px"}} mb={16}>
                    <CardBody>
                        <Text align="justify">
                            Je vise à être un ingénieur en informatique et réseau option MIAGE (méthodes informatiques
                            appliquées à la gestion d’entreprise), dont je rêvais d'être depuis mes premiers âges et me
                            voilà maintenant avec la bénédiction du dieu je le serai bien tôt. Développer un logiciel
                            est un art, maintenant puisque je suis capable de développer des logiciels, j'aimerais
                            collaborer avec vous pour satisfaire vos besoins.
                        </Text>
                    </CardBody>
                </Card>
            </Center>
            <Footer/>
        </>
    )
}

export default Home;