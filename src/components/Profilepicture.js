import {
    Avatar, Box, Center, Flex, Image, Wrap, WrapItem
} from "@chakra-ui/react";
import Main from "../Main-min.jpg"
function Profilepicture(){
    return (
        <Flex align="center">
                <Box>
                    <Avatar align="center" size="2xl" name="Berkan Ceyhan" src={Main} />{""}
                </Box>
            </Flex>


    );
}
export default Profilepicture