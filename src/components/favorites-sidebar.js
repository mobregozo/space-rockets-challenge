import React, { useContext } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";

import { LaunchItem } from "./launches";
import { LaunchPadItem } from "./launch-pads";
import { X } from "react-feather";
import { FavoritesContext } from "../contexts/favourites-context";

export default function FavoritesSideBar({ isOpen, onClose }) {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      blockScrollOnMount={false}
      scrollBehavior="inside"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Favorites</DrawerHeader>
        <DrawerBody p={2}>
          <Accordion allowMultiple={true}>
            <AccordionItem
              border="0"
              isDisabled={favorites.launch.length === 0}
            >
              <h2>
                <AccordionButton border="0">
                  <Box flex="1" textAlign="left">
                    Launches ({favorites.launch.length})
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid spacingY={5}>
                  {favorites.launch.map((launch) => (
                    <Box
                      position="relative"
                      display="flex"
                      key={launch.flight_number}
                    >
                      <IconButton
                        icon={<X size="1rem" />}
                        position="absolute"
                        aria-label="remove launch"
                        zIndex={1}
                        right={2}
                        top={2}
                        size="xs"
                        rounded="50%"
                        onClick={() =>
                          removeFavorite("launch", launch, "flight_number")
                        }
                      />
                      <LaunchItem launch={launch} />
                    </Box>
                  ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              border="0"
              isDisabled={favorites.launchPad.length === 0}
            >
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    LaunchPads ({favorites.launchPad.length})
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid spacingY={5} gridAutoFlow="row dense">
                  {favorites.launchPad.map((launchPad) => (
                    <Box
                      position="relative"
                      display="flex"
                      key={launchPad.site_id}
                    >
                      <IconButton
                        icon={<X size="1rem" />}
                        position="absolute"
                        aria-label="remove launchpad"
                        zIndex={1}
                        right={2}
                        top={2}
                        rounded="50%"
                        size="xs"
                        onClick={() =>
                          removeFavorite("launchPad", launchPad, "site_id")
                        }
                      />
                      <LaunchPadItem
                        launchPad={launchPad}
                        styles={{ flex: "1" }}
                      />
                    </Box>
                  ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
