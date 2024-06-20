import { Container, Text, VStack, Heading, Box, Image, SimpleGrid, Link, Flex, Button, HStack } from "@chakra-ui/react";
import { FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    image: "/images/spaghetti-carbonara.jpg",
    link: "#",
    rating: 4.5,
    ratingsCount: 10
  },
  {
    title: "Chicken Alfredo",
    image: "/images/chicken-alfredo.jpg",
    link: "#",
    rating: 4.0,
    ratingsCount: 8
  },
  {
    title: "Beef Tacos",
    image: "/images/beef-tacos.jpg",
    link: "#",
    rating: 4.7,
    ratingsCount: 15
  },
  {
    title: "Vegetable Stir Fry",
    image: "/images/vegetable-stir-fry.jpg",
    link: "#",
    rating: 4.2,
    ratingsCount: 12
  }
];

const Index = () => {
  const [recipeRatings, setRecipeRatings] = useState(recipes);

  const handleRating = (index, rating) => {
    const newRatings = [...recipeRatings];
    const recipe = newRatings[index];
    recipe.rating = ((recipe.rating * recipe.ratingsCount) + rating) / (recipe.ratingsCount + 1);
    recipe.ratingsCount += 1;
    setRecipeRatings(newRatings);
  };

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Recipe Sharing Website</Heading>
        <Text fontSize="xl">Discover and share your favorite recipes!</Text>
        <Button as={RouterLink} to="/submit-recipe" colorScheme="teal" size="lg">Submit Your Recipe</Button>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="100%">
          {recipeRatings.map((recipe, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={recipe.image} alt={recipe.title} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={4}>{recipe.title}</Heading>
                <Link href={recipe.link} color="teal.500" isExternal>
                  View Recipe <FaExternalLinkAlt />
                </Link>
                <HStack mt={4}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < Math.round(recipe.rating) ? "gold" : "gray"}
                      onClick={() => handleRating(index, i + 1)}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </HStack>
                <Text mt={2}>{recipe.rating.toFixed(1)} ({recipe.ratingsCount} ratings)</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;