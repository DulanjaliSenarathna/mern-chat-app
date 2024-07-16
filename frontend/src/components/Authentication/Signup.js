import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {

const [show, setShow] = useState(false)
const [name, setName] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [confirmpassword, setConfirmpassword] = useState();
const [pic, setPic] = useState();

const handleClick = () =>{
  setShow(!show)
}

const postDetails = (pics) =>{

}

const submitHandler = () =>{
  
}

  return (
    <VStack spacing='5px' color='black'>
<FormControl id='first-name' isRequired>
    <FormLabel>Name</FormLabel>
    <Input placeholder='Enter your name' onChange={(event)=> setName(event.target.value)}/>
</FormControl>
<FormControl id='email' isRequired>
    <FormLabel>Email</FormLabel>
    <Input placeholder='Enter your email' onChange={(event)=> setEmail(event.target.value)}/>
</FormControl>
<FormControl id='password' isRequired>
    <FormLabel>Password</FormLabel>
    <InputGroup>
    <Input type={show ? "text" : "password"} placeholder='Password' onChange={(event)=> setPassword(event.target.value)}/>
    <InputRightElement>
    <Button h='1.75rem' size='sm' onClick={handleClick}>
      {show ? 'Hide' :'Show'}
    </Button>
    </InputRightElement>
    </InputGroup>
   
</FormControl>
<FormControl id='password' isRequired>
    <FormLabel>Confirm Password</FormLabel>
    <InputGroup>
    <Input type={show ? "text" : "password"} placeholder='Password' onChange={(event)=> setPassword(event.target.value)}/>
    <InputRightElement>
    <Button h='1.75rem' size='sm' onClick={handleClick}>
      {show ? 'Hide' :'Show'}
    </Button>
    </InputRightElement>
    </InputGroup>
   
</FormControl>

<FormControl id='pic'>
    <FormLabel>Upload your picture</FormLabel>
    <Input
    type='file'
    p={1.5}
    accept='image/*'
    onChange={(event)=> postDetails(event.target.files[0])}/>
</FormControl>
<Button colorScheme='blue' w='100%' style={{marginTop:15}}
onClick={submitHandler}
>
Sign Up
</Button>
    </VStack>
  )
}

export default Signup