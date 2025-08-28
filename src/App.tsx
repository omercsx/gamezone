import { Grid, GridItem, Box, Text } from '@chakra-ui/react';
import NavBar from './components/NavBar';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr',
      }}
      gap="4"
    >
      <GridItem
        area="nav"
        bg="background.muted"
        borderBottomWidth="1px"
        borderColor="border"
      >
        <NavBar />
      </GridItem>
      <GridItem
        area="aside"
        hideBelow="lg"
        bg="background.subtle"
        padding="5"
        borderRightWidth="1px"
        borderColor="border"
      >
        <Text fontSize="lg" fontWeight="semibold" color="text">
          Game Categories
        </Text>
        <Box marginTop="4">
          <Text color="text.muted">• Action</Text>
          <Text color="text.muted">• Adventure</Text>
          <Text color="text.muted">• RPG</Text>
          <Text color="text.muted">• Sports</Text>
          <Text color="text.muted">• Strategy</Text>
        </Box>
      </GridItem>
      <GridItem area="main" padding="5">
        <Text fontSize="2xl" fontWeight="bold" color="text" marginBottom="4">
          Popular Games
        </Text>
        <Text color="text.muted">Game content will appear here...</Text>
      </GridItem>
    </Grid>
  );
}

export default App;
