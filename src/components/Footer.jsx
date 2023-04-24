import {Box, Flex, Link} from "@chakra-ui/react";

function Footer() {
    return (
        <Box position="fixed" as="footer" bottom="0" width="full" py={5}>
            <Flex top="full" justifyContent="center" gap={5}>
                <Link href="https://www.linkedin.com/in/ali-almai-1b71721a5/" isExternal fontSize={20}>
                    <i className="bi bi-linkedin"></i>
                </Link>
                <Link href="https://github.com/voidnowhere" isExternal fontSize={20}>
                    <i className="bi bi-github"></i>
                </Link>
                <Link href="mailto:ali_almai@outlook.com" isExternal fontSize={20}>
                    <i className="bi bi-envelope-at-fill"></i>
                </Link>
                <Link href="tel:+212641886162" isExternal fontSize={20}>
                    <i className="bi bi-telephone-fill"></i>
                </Link>
            </Flex>
        </Box>
    );
}

export default Footer;