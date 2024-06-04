import { Box, Container, Flex, Heading, HStack, IconButton, Image, Input, Link, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" bg="gray.800" color="white" p={4} align="center" justify="space-between">
        <HStack spacing={4}>
          <Image src="/path-to-logo.png" alt="Logo" boxSize="50px" />
          <HStack spacing={4}>
            <Link href="/">Home</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/top-movies">Top Movies</Link>
            <Link href="/contact">Contact</Link>
          </HStack>
        </HStack>
        <HStack spacing={2}>
          <Input placeholder="Search..." variant="filled" bg="gray.700" />
          <IconButton aria-label="Search" icon={<FaSearch />} />
        </HStack>
      </Flex>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        {/* Hero Section */}
        <Box bgImage="url('/path-to-hero-image.jpg')" bgSize="cover" bgPos="center" color="white" p={8} borderRadius="md">
          <Heading as="h1" size="2xl" mb={4}>Popular Movie Title</Heading>
          <Text fontSize="lg">A brief description of the popular movie goes here. It should be engaging and informative.</Text>
        </Box>

        {/* Latest Reviews */}
        <Box mt={8}>
          <Heading as="h2" size="xl" mb={4}>Latest Reviews</Heading>
          <Flex wrap="wrap" spacing={4}>
            {/* Example Review Card */}
            <Box bg="gray.100" p={4} borderRadius="md" width="300px" m={2}>
              <Image src="/path-to-movie-poster.jpg" alt="Movie Poster" borderRadius="md" mb={4} />
              <Heading as="h3" size="md" mb={2}>Movie Title</Heading>
              <Text fontSize="sm" mb={2}>Rating: 4.5/5</Text>
              <Text fontSize="sm">A short snippet of the review goes here. It should be enticing and give a glimpse of the review content.</Text>
            </Box>
            {/* Repeat the above Box for more review cards */}
          </Flex>
        </Box>

        {/* Top Rated Movies */}
        <Box mt={8}>
          <Heading as="h2" size="xl" mb={4}>Top Rated Movies</Heading>
          <Flex overflowX="scroll" spacing={4}>
            {/* Example Movie Poster */}
            <Image src="/path-to-top-movie-poster.jpg" alt="Top Movie Poster" boxSize="200px" borderRadius="md" m={2} />
            {/* Repeat the above Image for more top-rated movie posters */}
          </Flex>
        </Box>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={8} mt={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between" wrap="wrap">
            <Box>
              <Heading as="h3" size="md" mb={4}>About Us</Heading>
              <Text fontSize="sm">A brief about section goes here. Describe the purpose of the website and any other relevant information.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={4}>Contact</Heading>
              <Text fontSize="sm">Email: contact@moviereviews.com</Text>
              <Text fontSize="sm">Phone: (123) 456-7890</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={4}>Follow Us</Heading>
              <HStack spacing={4}>
                <Link href="https://facebook.com" isExternal><FaFacebook size="24px" /></Link>
                <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
                <Link href="https://instagram.com" isExternal><FaInstagram size="24px" /></Link>
              </HStack>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;