import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Serving from '../assets/pharmasict-serving-customer-drug-store 1.png'

const AboutUs = () => {
    return (
        <Flex px={{ base: "0", md:"75px", lg: "100px", xl:"150px" }} bg={"#f7f8fb"} mt={{md:"70px", lg:"10px", xl:"150px"}}>
            <Box w={{ base: "100%", md: "50%" }} display={{base:"none",md:"block"}}>
                <Image
                    src={Serving}
                    alt='Internet Folks'
                />
            </Box>
            <Flex direction={"column"} justify={"center"} align={{base:"center",md:"start"}} w={{ base: "100%", md: "50%" }} pl={{base:"50px",md:"50px"}} pr={{base:"50px",md:"0"}} py={{base:"100px",md:"0"}}>
                <Heading as={"h3"} color={"#0E2368"} fontFamily={"600"} fontSize={{ base: "26px", md: "48px" }}>About Us</Heading>

                <Text color={"#0E2368"} fontFamily={"400"} fontSize={{ base: "11px", sm: "14px",md:"16px" }} my={"20px"} textAlign={{base:"center",md:"left"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</Text>
                
                <Button fontSize={{base:"14px", md:"16px", lg:"18px"}} bg={"#E23744"} color={"white"} borderRadius={50} px={{base:"12px",md:"15px",lg:"35px"}} py={{base:"12px", md:"15px", lg:"25px"}} _hover={{ bg: "#c91d2b" }} >Read More</Button>
            </Flex>
        </Flex>
    );
}

export default AboutUs;