import { Container, Text, VStack, Heading, Box, Image, SimpleGrid, Link, Flex } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    image: "/images/spaghetti-carbonara.jpg",
    link: "#"
  },
  {
    title: "Chicken Alfredo",
    image: "/images/chicken-alfredo.jpg",
    link: "#"
  },
  {
    title: "Beef Tacos",
    image: "/images/beef-tacos.jpg",
    link: "#"
  },
  {
    title: "Vegetable Stir Fry",
    image: "/images/vegetable-stir-fry.jpg",
    link: "#"
  }
];

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Recipe Sharing Website</Heading>
        <Text fontSize="xl">Discover and share your favorite recipes!</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="100%">
          {recipes.map((recipe, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={recipe.image} alt={recipe.title} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={4}>{recipe.title}</Heading>
                <Link href={recipe.link} color="teal.500" isExternal>
                  View Recipe <FaExternalLinkAlt />
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;