import { Avatar, Container, Heading,Stack, VStack,Text, Button, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import intro from "../../assets/videos/intro.mp4"


const Founder = ()=>{
  return(

    
    <Stack direction={["column","row"]} spacing={["4","16"]} padding={"8"} >
    <VStack>
      <Avatar boxSize={['40','48']}/>
      <Text children={'Co-Founder'} opacity={'0.7'}/>
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
    <Heading children={'Krishna Harjai'} size={['md','xl']}/>
    <Text textAlign={['center','left']} children={'Hi, I am a full-stack developer and a teacher . Our mission is to privide quality content at reasonable price'} />
    
    </VStack>
    

    </Stack>
)
}

const TandC =({termsAndCondition})=>{
  return(

    <Box>
    <Heading children={"Terms And Condition"} textAlign={['center', 'left']} marginY={'4'} />
  <Box h={'sm'} p="4">
  <Text textAlign={["center", "left"]} letterSpacing={"widest"} fontFamily={'heading'}>{termsAndCondition}</Text>
  <Heading my={'4'} size="xs" children="Refund only applicable for cancellation within 7 days"/>

  </Box>
  </Box>
  )
}

const VideoPlayer = ()=>{
  return (

    <Box>
    <video autoPlay
    muted

    controls src={intro}
    controlsList="nodownload nofullscreen noremoteplayback"
    disablePictureInPicture
    disableRemotePlayback
    >
    </video>
  </Box>
    )

}

const About = () => {
  return (
    <Container maxW={"container.lg"} p={'16'} boxShadow={'lg'}>
    <Heading children="About Us" textAlign={['center', 'left']} />
    <Founder/>
    <Stack m={'8'} direction={['column', 'row']} alignItems='center'>
    <Text fontFamily={"cursive"} textAlign={['center' ,'left']} >
      We are a video streaming platform with some premium courses available only for premium user
    </Text>
    <Link to="/subscribe" />
    <Button variant={"ghost"} colorScheme="yellow">

    CheckOut our Plan

    </Button>

    </Stack>
    <VideoPlayer/>
    <TandC termsAndCondition={'termsAndCondition'}  />


    <HStack my={'4'} p={'4'}>

    <RiSecurePaymentFill/>
    <Heading size={"xs"} fontFamily="sans-serif" textTransform={"uppercase"} children={"Payment is secured by RazorPay"} />



    </HStack>
    </Container>
  )
}

export default About