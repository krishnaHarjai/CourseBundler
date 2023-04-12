import { Heading, Stack,VStack,Text,Button,Image, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Home/home.css'
import vd from "../assets/images/bg.png"
import  {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import intro from "../assets/videos/intro.mp4"


const Home = () => {
  return (
    <section className='home'>
    <div className="container">
        <Stack 
        direction={["column","row"]}
        justifyContent={['center','space-between']}
        height="100%"
        alignItems={"center"}
        spacing={["16",'40']}
        >
        <VStack width={"full"} spacing={"5"} alignItems={["center","flex-end"]}>
        <Heading children="LEARN FROM THE EXPERTS" size={'2xl'}/>
        <Text fontSize={'2xl'} textAlign={['center' ,'left']} children="Find Valuable Content At Reasonable Price"/>
        <Link to="/courses">
        <Button size={'lg'} colorScheme={"yellow"}>Explore Now</Button>
        </Link>
        </VStack>
        <Image boxSize={"sm"} src={vd} objectFit={'contain'} className="vector-graphics"/>
        </Stack>
    </div>
    <Box padding={"8"} bg={"blackAlpha.800"} >
    <Heading 
    children={"OUR BRANDS"}
    fontFamily={"body"}
    color={"yellow.500"}
    textAlign={"center"}
    />
    <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop={"4"}>

    <CgGoogle/>
    <CgYoutube/>
    <SiCoursera/>
    <SiUdemy/>
    <DiAws/>
    </HStack>
    </Box>

    <div className="container2">
    <video autoPlay
    controls src={intro}
    controlsList="nodownload nofullscreen noremoteplayback"
    disablePictureInPicture
    disableRemotePlayback
    >
    </video>
    </div>

    </section>
  )
}

export default Home