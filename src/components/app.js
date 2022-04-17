import React from "react";
import { Routes, Route } from "react-router-dom";
import { Flex, Text, useDisclosure, Button } from "@chakra-ui/react";

import Launches from "./launches";
import Launch from "./launch";
import Home from "./home";
import LaunchPads from "./launch-pads";
import LaunchPad from "./launch-pad";
import FavoritesSideBar from "./favorites-sidebar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:launchId" element={<Launch />} />
        <Route path="/launch-pads" element={<LaunchPads />} />
        <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
      </Routes>
    </div>
  );
}

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="6"
        bg="gray.800"
        color="white"
      >
        <Text
          fontFamily="mono"
          letterSpacing="2px"
          fontWeight="bold"
          fontSize="lg"
        >
          ¡SPACE·R0CKETS!
        </Text>
        <Button colorScheme="black" onClick={onOpen} variant="outline">
          Favorites
        </Button>
      </Flex>
      <FavoritesSideBar isOpen={isOpen} onClose={onClose} />
    </>
  );
}
