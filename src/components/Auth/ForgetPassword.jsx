import { Container, Heading, VStack, Input,Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword   = () => {

    const [email,setEmail] = useState('');
  return (
    <Container>
    <form>
        <Heading children={'Forget Password'} my={'16'} textTransform={'uppercase'} textAlign={['center','left']}></Heading>
        <VStack spacing={'8'}>
                <Input required id ="email" value={email} onChange={(e)=> setEmail(e.target.value)} type={'text'} placeholder={"krishna@gmail.com"} focusBorderColor={'yellow.500'}/>
                <Button type='submit' width={'full'}></Button>
        </VStack>
    </form>


    </Container>
  )
}

export default  ForgetPassword