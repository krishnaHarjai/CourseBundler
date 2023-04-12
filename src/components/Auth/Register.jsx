import { Box, Container,FormLabel,Heading,Input,VStack,Button,Avatar } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const fileUploadCss = {
    cursor:'pointer',
    marginLeft:'-5%',
    width:'110%',
    height:"none",
    color:'#ECC948',
    backgroundColor:'white',
    
}
const fileUploadStyle = {
    '&::file-selector-button': fileUploadCss,
};
const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [image,setImage] = useState('');
    const [imagePrev,setImagePrev] = useState('');

    const changeImageHandler = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ()=>{
            setImagePrev(reader.result);
            setImage(file); 
        }
    }



    
  return (
    <Container height={'95vh'} >
        <VStack h={"full"} justifyContent="center">
            <Heading textTransform={"uppercase"} children={'Registration'}/>
            <form style={{width:'100%'}}>
            <Box my={'4'} display={'flex'} justifyContent={'center'}>
                <Avatar src={imagePrev} size={"2xl"}/>
            </Box>


            <Box marginY={'4'}>
                <FormLabel htmlFor='name' children="Name"/>
                <Input required id ="email" value={name} type={'text'} onChange={(e)=> setName(e.target.value)} placeholder={"Enter Your Name"} focusBorderColor={'yellow.500'}/>
            </Box>
            <Box marginY={'4'}>
                <FormLabel htmlFor='email' children="Email Address"/>
                <Input required id ="email" value={email} onChange={(e)=> setEmail(e.target.value)} type={'text'} placeholder={"krishna@gmail.com"} focusBorderColor={'yellow.500'}/>
            </Box>
            <Box marginY={'4'}>
                <FormLabel htmlFor='password' children="Password"/>
                <Input required id ="email" value={password} type={'password'} onChange={(e)=> setPassword(e.target.value)} placeholder={"krishna@gmail.com"} focusBorderColor={'yellow.500'}/>
            </Box>
            <Box marginY={'4'}>
                <FormLabel htmlFor='chooseAvatar' children="chooseAvatar"/>
                <Input accept="image/*" required id ="chooseAvatar" onChange={changeImageHandler}  type={'file'} placeholder={"krishna@gmail.com"} focusBorderColor={'yellow.500'} css={fileUploadStyle}  />
            </Box>
            <Box>
                <Link to={"/forgetpassword"}>
                    <Button fontSize={'sm'} variant="link" >Froget Password</Button>
                </Link>
            </Box>

            <Button my={"4"} colorScheme={'yellow'} type="submit">
            Sign Up
            </Button>
            <Box my="4">
            Already Signed Up ? {''}
            <Link to="/login">
            <Button colorScheme={'yellow'} variant="link" >
                Login Here
            </Button>{" "}
            here
            </Link>

            </Box>

            </form>

        </VStack>
    </Container>
  )
}

export default Register