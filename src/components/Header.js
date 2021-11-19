import {
    Box,
    Button,
    Center,
    Flex,
    IconButton,
    Menu,
    MenuButton, MenuItem,
    MenuList,
    Spacer,
    Square,
    Text, useColorMode
} from "@chakra-ui/react";
import {FaBars, FaSun} from "react-icons/all";
function Header(){
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <div className="Header">
            <Flex>
                <Box p={4}>
                    <Text>Berkan Ceyhan</Text>
                </Box>

                <Spacer />
                <Box  py={4} color="black">
                    <IconButton onClick={toggleColorMode} bg="yellow.200" icon={<FaSun/>}>
                        Toggle {colorMode === "light" ? "Dark" : "Light"}
                    </IconButton>
                </Box>
                <Box bg="" py={4} pl={2} >
                    <Menu p={4} >
                        <MenuButton as={IconButton}
                                    icon={<FaBars/>}
                                    aria-label="Options"
                                    variant="outline"

                        />
                        <MenuList>
                            <MenuItem>
                                Über mich
                            </MenuItem>
                            <MenuItem>
                                Projekte
                            </MenuItem>
                        </MenuList>
                    </Menu>
            </Box>
            </Flex>

    </div>
    );
}
export default  Header;