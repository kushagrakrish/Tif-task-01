import React from 'react'
import { Box, Flex, Image, Heading, Text, Button, Show } from "@chakra-ui/react"
import Vector from '../assets/Vector 1.png'
import Pizza from '../assets/Group 289.png'
import Truck from '../assets/truck.png'

const Banner = () => {
    return (
        <Flex w={"100%"} as='section' direction={{base:"column-reverse",md:"row"}}>
            <Flex w={{base:"100%", md:"50%"}} direction={"column"} pl={{base:"0px", md:"80px"}}>
            <Show above='md'> 
                <Box w={"20"} pt={"30px"}>                                         
                   <Image
                        src={Truck}
                        alt='Internet Folks'
                        m={{base:"auto",md:"0"}}
                    />
                </Box></Show>
                <Flex w={"100%"} direction={"column"} h={"100%"} justify={"center"} align={{base:"center", md:"flex-start"}} pb={{base:"20px", md:"0", lg:"80px"}}>
                    
                    <Heading as={"h1"} color={"#0E2368"} fontSize={{base:"38px", lg:"62px"}} pt={{base:"30px", md:"0"}} fontWeight={700} lineHeight={{base:"46px", md:"50px", lg:"69px"}} textAlign={{base:"center", md:"left"}} w={{ base:"300px", lg:"400px"}}>
                        Discover the <Text as="span" color={"#E23744"}>Best</Text> Food  and Drinks
                    </Heading>

                    <Heading as={"h2"} color={"#0E2368"} fontWeight={400} fontSize={{base:"11px", md:"16px"}} lineHeight={{base:"20px", md:"27px"}} my={{base:"8px",md:"25px", lg:"35px"}} textAlign={{base:"center",md:"left"}} w={{base:"220px", md:"300px"}}>
                        Naturally made Healthcare Products for the better care & support of your body
                    </Heading>

                    <Button fontSize={{base:"14px", md:"16px", lg:"18px"}} bg={"#E23744"} color={"white"} borderRadius={50} w={{base:"120px",md:"150px",lg:"190px"}} h={{base:"40px", md:"53px", lg:"63px"}}  _hover={{ bg: "#c91d2b" }} mt={{base:"5px"}}>Explore Now!</Button>
                </Flex>
            </Flex>
            <Box w={{base:"100%", md:"50%"}}>
                <Box w={"100%"} position={"relative"}>
                    <Image
                        src={Pizza}
                        alt='Internet Folks'
                    />
                    <Image
                        src={Vector}
                        alt='Internet Folks'
                        position={"absolute"}
                        top={0}
                        right={0}
                    />
                    <Button
                        display={{base:"none",md:"block"}}
                        fontSize={{base:"11", lg:"16"}}
                        bg={"transparent"}
                        color={"white"}
                        border={"1px"}
                        borderColor={"white"}
                        borderRadius={50}
                        px={"16px"}
                        py={"2px"}
                        position={"absolute"}
                        top={4}
                        right={4}
                        _hover={{ bg: "white", color: "#e23744" }} >
                        Get in Touch
                    </Button>
                </Box>
            </Box>
        </Flex>
    );
}

export default Banner;