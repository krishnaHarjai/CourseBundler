import React from 'react'
import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular} from "react-icons/ti"
import { DiGithub } from 'react-icons/di'


const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
    <Stack direction={['column','row']}>
    <VStack alignItems={["center","flex-start"]} width={'100%'}>
    <Heading children="All Right Reserved" color={'white'}/>
    <Heading fontFamily={"body"} size={'sm'} children="@KrishnaHarjai" color={'yellow.400'} />
    </VStack>
    <HStack spacing={['2','10']} justifyContent={'center'} color={'white'} fontSize={"50"}>
    <a href="https://youtube.com/ArK" target={"_blank"}>
    <TiSocialYoutubeCircular/>
    </a>
    <a href="https://instagram.com/theofficialark" target={'_blank'}>
        <TiSocialInstagramCircular/>
    </a>
    <a href="https://github.com/krishnaharjai" target={'_blank'}>
        <DiGithub/>
    </a>


    </HStack>

    </Stack>

    </Box>
  )
}

export default Footer