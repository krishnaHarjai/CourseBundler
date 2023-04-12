import {
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  Image,
  Link,
} from '@chakra-ui/react';
import React, { useState } from 'react';



const Course = ({
  views,
  title,
  imagesrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imagesrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        size={'sm'}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children="Title"
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          children={'creator'}
          textTransform="uppercase"
        />
        <Text
          fontFamily={'body'}
          children={'Sample Boy'}
          textTransform="uppercase"
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />
      <Stack textAlign={'center'} direction={['column','row']}>

        <Link to={`/course/${id}`} textDecoration={'none'}>
          <Button colorScheme={'yellow'}>
            Watch Now
          </Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add To Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const addToPlaylistHandler = ()=>{
    console.log("Added to playlist");
  }




  const categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Block Chain Development',
    'Data Science',
  ];
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type={'text'}
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => {
          return (
            <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
              <Text children={item} />
            </Button>
          );
        })}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flex-wrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'Sample'}
          description={'sample1'}
          views={23}
          imagesrc={'Sample1'}
          id={'sample'}
          creator={'Sample'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
