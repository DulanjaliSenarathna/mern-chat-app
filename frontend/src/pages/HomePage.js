import React from 'react'
import {Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'

const HomePage = () => {
  return (
    <Container maxWidth='xl' centerContent >
      <Box display='flex'
      justifyContent='center'
      p={3}
      bg={'white'}
      w='100%'
      m='40px 0 15px 0'
      borderRadius='lg'
      borderWidth='1px'
      >
        <Text fontSize='4xl' fontFamily='work sans' color='black' >Chat App</Text>
      </Box>
      <Box bg='white' w='100%' p={4} color='black' borderRadius='lg' borderWidth='1px'>
      <Tabs variant='soft-rounded'>
  <TabList mb='1em'>
    <Tab width='50%'>Login</Tab>
    <Tab width='50%'>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      {/*Login*/}
      <Login/>
    </TabPanel>
    <TabPanel>
       {/*Sign up*/}
       <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  )
}

export default HomePage