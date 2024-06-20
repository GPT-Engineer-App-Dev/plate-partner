import { useState } from "react";
import { Container, VStack, Heading, Input, Button, Text, FormControl, FormLabel } from "@chakra-ui/react";

const SubmitRecipe = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [link, setLink] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    setSuccessMessage("Recipe submitted successfully!");
    setTitle("");
    setImageUrl("");
    setLink("");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl">Submit Your Recipe</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Recipe Title</FormLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter recipe title" />
            </FormControl>
            <FormControl id="image-url" isRequired>
              <FormLabel>Image URL</FormLabel>
              <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Enter image URL" />
            </FormControl>
            <FormControl id="link" isRequired>
              <FormLabel>Recipe Link</FormLabel>
              <Input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Enter recipe link" />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="100%">Submit</Button>
          </VStack>
        </form>
        {successMessage && <Text color="green.500">{successMessage}</Text>}
      </VStack>
    </Container>
  );
};

export default SubmitRecipe;