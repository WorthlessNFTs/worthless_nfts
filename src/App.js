import React from 'react'
import "@fontsource/comic-mono"
import "@fontsource/roboto-mono"
import {
  ChakraProvider,
  Box,
  Image,
  Button,
  Badge,
  Text,
  Icon,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Grid,
  HStack,
  Switch,
  InputGroup,
  InputRightElement,
  Flex,
  Tag,
  Heading,
  List,
  ListItem,
  Link
} from '@chakra-ui/react'
import { HashLink} from 'react-router-hash-link'
import  {BrowserRouter as Router} from 'react-router-dom'
import { extendTheme } from "@chakra-ui/react"
import dev from './images/dev.png'
import roadmap from './images/roadmap.png'
import worthless from './images/worthless.png'
import twitter from './images/twitter.svg'
import discord from './images/discord.svg'



const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "#D5DBDB",

      }
    }
  },
  fonts: {
    heading: "Comic Mono",
    body: "Roboto Mono",
  },
  // colors: {
  //   // body: '#D5DBDB'
  // }
  
  // colors: {
  //   brand: {
  //     100: "#f7fafc",
  //     // ...
  //     900: "#1a202c",
  //   },
  // },
})



const App = () => (
  <Router>
    <ChakraProvider resetCSS theme={theme}>
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        mt={4}
        backgroundColor="#000000"
        pt={50}
        pl={25}
        pr={25}
        pb={50}
      >
          <Box minWidth={175}>
            <Link as={HashLink} to='/home#About'>
            <Heading color="#ffffff" maxWidth={150} vertical-align='top'>
              About
            </Heading>
            </Link>
          </Box>
          <Box minWidth={175}>
            <Link as={HashLink} to='/home#Mint'>
              <Heading color="#ffffff" maxWidth={150} vertical-align='top'>
                Mint
              </Heading>
            </Link>
          </Box>
          <Box minWidth={175}>
            <Link as={HashLink} to='/home#RoadMap'>
              <Heading color="#ffffff" maxWidth={150} vertical-align='top'>
                Road Map
              </Heading>
            </Link>
          </Box>
          <Box minWidth={175}>
          <Link as={HashLink} to='/home#WhitePaper'>
              <Heading color="#ffffff" maxWidth={150} vertical-align='top' overflow="hidden">
                White Paper
              </Heading>
            </Link>
          </Box>
          <Box minWidth={175}>
            <Link as={HashLink} to='/home#Team'>
              <Heading color="#ffffff" maxWidth={150} vertical-align='top'>
                Team
              </Heading>
            </Link>
          </Box>
          <Box minWidth={175}>
            <Link as={HashLink} to='/home#Socials'>
              <Heading color="#ffffff" maxWidth={150} vertical-align='top'>
                Socials
              </Heading>
            </Link>
          </Box>
          <Box minWidth={175}>
            <Button height={75} width={150}>
            <Heading color="#000000" maxWidth={150} vertical-align='top'>
              MINT
            </Heading>
          </Button>
          </Box>
      </Flex>
      <Flex
        justifyContent="center"
        color="whiteAlpha.500"
        backgroundColor="#000000"
        alignItems="stretch"
      >
        <Box>
          <Grid
            gap={6}
            row={7}
            column={1}
            // templateRows="repeat(7, 1fr)"
            minWidth={600}
            maxWidth={700}
            p={5}
          >
            <Box>
            <Flex
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                backgroundColor="#000000"
              >
              <Image src={worthless}/>
              </Flex>
            </Box>
            <Box mb={5}>
              <Heading id='About' textAlign="center" color="#ffffff">
                Think There Are Enough Solana NFT Projects? Think Again.
              </Heading>
              <Text color="#ffffff"></Text>
              <List
                color="#ffffff"
                textAlign="center"
                p={10}
                fontWeight="bold"
              >
                <ListItem pb={2}>1000 Uniquely Insulting NFTs</ListItem>
                <ListItem pb={2}>Randomly, Algorithmically Generated.</ListItem>
                <ListItem pb={2}>Completely Worthless.</ListItem>
              </List>
              <Text>
                Did you sell the floor just before it mooned? Is your wallet a graveyard 
                of dead NFT projects? Are you completely retarded?
              </Text>
              <br />
              <Text>

                Then this is the project for you. A unique NFT, telling you exactly
                how stupid you are. Stored in perpetuity on the Solana blockchain.
              </Text>
              <br />
              <Text>

                In all seriousness, these are total trash that you absolutely should not
                buy if you have any sense at all. I literally made these to
                insult all you smooth brains. Anyone who mints one is asking to lose money.
              </Text>
              <br />
              <Text>

                But if you're still reading this then odds are you're a dumb ape, 
                so you'll probably buy one anyway. Do so at your own risk - odds of this 
                NFT mooning are basically minus infinity. Don't say I didn't warn you: <b><em>DO NOT MINT
                THIS NFT</em></b> (Unless you are OK with funding my Lambo).
              
              </Text>
            </Box>
            <Box mb={5}>
              <Heading
                id='Mint'
                textAlign="center"
                color="#ffffff"
                fontWeight="bold"
              >
                Mint - Coming Soon.
              </Heading>
              <List p={5} fontWeight="bold">
                <ListItem color="#ffffff" textAlign="center">
                  1000 NFTS @ 0.5 SOL Mint Price
                </ListItem>
              </List>
              <Text>
                The Worthless NFT mint will start as soon as I figure out how to
                copy and paste a mint button into this HTML template. Consider
                this a social experiment into how many apes will hand over
                their SOL for one of the laziest NFT projects to date. Mint price
                will be 0.5 SOL.
              </Text>
            </Box>
            <Box mb={5}>
              <Heading id='RoadMap' textAlign="center" color="#ffffff">
                Road Map
              </Heading>
              <Flex
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                backgroundColor="#000000"
                minWidth={700}
                mt={5}
              
              >
              <Image src={roadmap}/>
              </Flex>
            </Box>
            <Box mb={5}>
              <Heading id='WhitePaper' textAlign="center" color="#ffffff">
                White Paper
              </Heading>
              <Text mt={5}>
                You really thought I'd write a 10 page document on why my project
                will change the NFT space forever? Grow up.
              </Text>
            </Box>
            <Box mb={5}>
              <Heading id='Team' textAlign="center" color="#ffffff">
                Team
              </Heading>
              <Flex
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                m={10}
                backgroundColor="#000000"
              >
              <Image src={dev}/>
              </Flex>
              <Text>
                I am extremely lazy yet highly aspirational monke masquerading as a
                creative, coder and crypto enthusiast. I have no experience in
                anything worthwhile but that won't stop me trying to take your
                money for these crappy JPEGs. Past projects include falling for obvious rugs,
                panic selling dips and giving my seed phrase to the nice MetaMask support staff in my DMs.
              </Text>
            </Box>
            <Box mb={5}>
              <Heading id='Socials' textAlign="center" color="#ffffff">
                Socials
              </Heading>
              <Text>
                Want to join my community of fellow idiots or send me hatemail?
                Check out the Discord and Twitter:
              </Text>
              <Flex
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                mt={10}
                backgroundColor="#000000"
              >
                <Link href='https://twitter.com/'>
                  <Image src={twitter} height={100} width={100} mr={10}/>
                </Link>
                <Link href='https://discord.com/'>
                  <Image src={discord} height={100} width={100}ml={10}/>
                </Link>
              </Flex>
            </Box>
            
          </Grid>
          <Box height={200}>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  </Router>
)

export default App