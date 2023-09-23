import React from 'react';
import { Card, CardBody, CardFooter, Stack, Image, Heading, Text, Button } from '@chakra-ui/react'

const Cards = ({ data }) => {

    return (
        <Card maxW={{ base: "300px" }} mb={{ base: "50px", lg: "0px" }}>
            <CardBody >
                <Image
                    src={data.articleImg}
                    alt={data.title}
                    objectFit={"contain"}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' color={"#0E2368"} textAlign={{ base: "center", lg: "left" }}>{data.title}</Heading>
                    <Text color={"#0E2368"} textAlign={{ base: "center", lg: "left" }}>
                        {data.shortDesc}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter pt={"0px"}>
                <Button color={"#0E2368"} border={"2px"} borderColor={"#0E2368"} borderRadius={"50px"} bg={"transparent"} mx={{ base: "auto", lg: "0" }}>
                    Read More
                </Button>
            </CardFooter>
        </Card>
    );
}

export default Cards;