import { Box, Flex, List, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import {AiOutlineTwitter,AiOutlineInstagram} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import React from 'react';
import Truck from '../assets/truck.png'
import { footerData } from '../data/Data';

const Footer = () => {
    return (
        <Flex direction={{ base: "column", lg: "row" }} py={"60px"} px={{base:"40px",lg:"0px"}} bg={"#f7f8fb"} mt={{base:"20px", lg:"30px"}}>
            <Flex w={"100%"} align={{ base: "center", lg: "center" }} justify={{ base: "center", lg: "center" }} mb={{base:"30px",lg:"0px"}}>
                <Image
                    src={Truck}
                    alt='Internet Folks'
                    m={{ base: "auto", md: "0" }}
                />
            </Flex>
            <Flex w={"100%"} direction={"column"} mb={{base:"30px",lg:"0px"}}>
                <Text fontWeight={"600"} color={"0E2368"} mb={"10px"}>Contact Us</Text>
                <Text fontSize={"12px"} color={"0E2368"} mb={"10px"}>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</Text>
                <Text fontSize={"12px"} color={"0E2368"} mb={"10px"}>example2020@gmail.com</Text>
                <Text fontSize={"12px"} color={"0E2368"} mb={"10px"}>(904) 443-0343</Text>
            </Flex>
            <Flex w={"100%"} direction={"column"} justify={"center"} pl={{base:"0px",lg:"75px"}} mb={{base:"40px",lg:"0px"}}>
                <Text fontWeight={"600"} color={"0E2368"} mb={"10px"}>More</Text>
                <List>
                    {
                        footerData?.map((item,idx)=>(
                            <ListItem key={idx} fontSize={"12px"} color={"0E2368"} mb={"10px"}>{item}</ListItem>
                            
                        ))
                    }
                   
                </List>
            </Flex>
            <Flex w={"100%"} direction={{base:"column-reverse",lg:"column"}} justify={"space-between"} align={{base:"center",lg:"flex-start"}}>
                <Box mt={{base:"15px",lg:"0px"}}>
                    <Text fontWeight={"600"} color={"0E2368"} mb={"10px"} display={{base:"none",lg:"block"}}>Social Links</Text>
                    <List display={"flex"}>
                        <ListItem mx={"10px"}>
                            <AiOutlineTwitter style={{
                                fontSize:"24px"
                            }}/>
                        </ListItem>
                        <ListItem mx={"10px"}>
                            <AiOutlineInstagram  style={{
                                fontSize:"24px"
                            }}/>
                        </ListItem>
                        <ListItem mx={"10px"}>
                            <FaFacebookF  style={{
                                fontSize:"24px"
                            }}/>
                        </ListItem>
                    </List>
                </Box>
                <Text fontSize={{base:"11px",lg:"14px"}} color={"#828B9C"}>© 2022 Food Truck Example</Text>
            </Flex>
        </Flex>
    );
}

export default Footer;