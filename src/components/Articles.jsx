import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import React, { useMemo, useState } from 'react';
import Cards from './sharedComponents/Cards';
import { articleData } from '../data/Data';

const Articles = () => {

    const [page, setPage] = useState(1);
    const [currentPageData, setcurrentPageData] = useState(articleData.slice(page - 1, page + 2));

    const maxPage = Math.ceil(articleData.length / 3);

    useMemo(() => {
        setcurrentPageData(articleData.slice(page - 1, page + 2));
    }, [page]);

    return (
        <Flex direction={"column"}>
            <Box px={{ base: "30px", lg: "50px", xl: "80px" }}>
                <Heading as={"h3"} fontSize={"56px"} color={"#0E2368"} fontFamily={"600"} textAlign={"left"} pt={{md:"60px", lg:"100px"}}>Latest Articles</Heading>
                <Flex mt={"30px"} justify={"space-between"} align={{ base: "center", lg: "baseline" }} direction={{ base: "column", lg: "row" }}>
                    {currentPageData.map((item) => (
                        <Cards data={item} key={item.title} />
                    ))
                    }
                </Flex>
                <Flex align={"center"} justify={"center"} my={"30px"}>
                    <Box border={"1px"} borderColor={"#0E2368"} borderRadius={"6px"} p={"6px"} cursor={"pointer"} _hover={{ bg: "#e9edfc" }} onClick={() => setPage(page > 1 ? page - 1 : 1)}>
                        <AiOutlineLeft
                            style={{
                                width: "20px",
                                height: "20px",
                                cursor: "pointer",
                            }}
                        />
                    </Box>

                    <Text as={"span"} mx={"10px"}>{page}/{maxPage}</Text>

                    <Box border={"1px"} borderColor={"#0E2368"} borderRadius={"6px"} p={"6px"} cursor={"pointer"} _hover={{ bg: "#e9edfc" }} onClick={() => setPage(page < maxPage ? page + 1 : maxPage)}>
                        <AiOutlineRight
                        style={{
                            width: "20px",
                            height: "20px",
                            cursor: "pointer",
                        }}
                        />
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
}

export default Articles;