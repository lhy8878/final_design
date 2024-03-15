/*eslint-disable*/
// chakra imports
import {
    Avatar, Badge,
    Box,
    Button, Flex,
    Link,
    Stack,
    Text,
    Image,
    useColorModeValue, Spacer
} from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
import { CreativeTimLogo } from "components/Icons/Icons";
import { Separator } from "components/Separator/Separator";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

// this function creates the links and collapses that appear in the sidebar (left menu)


const SidebarContent = ({ logoText, routes, unCollapse }) => {

    // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const [state, setState] = React.useState({});
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };
  const createLinks = (routes) => {
    // Chakra Color Mode
    const activeBg = useColorModeValue("white", "gray.700");
    const inactiveBg = useColorModeValue("white", "gray.700");
    const activeColor = useColorModeValue("gray.700", "white");
    const inactiveColor = useColorModeValue("gray.400", "gray.400");

    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.category) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <div key={prop.name}>
          {/*{ unCollapse && (<Text*/}
          {/*    color={activeColor}*/}
          {/*    fontWeight="bold"*/}
          {/*    mb={{*/}
          {/*      xl: "12px",*/}
          {/*    }}*/}
          {/*    mx="auto"*/}
          {/*    ps={{*/}
          {/*      sm: "10px",*/}
          {/*      xl: "16px",*/}
          {/*    }}*/}
          {/*    py="12px"*/}
          {/*  >*/}
          {/*      {prop.name}*/}
          {/*  </Text>) }*/}
            {createLinks(prop.views)}
          </div>
        );
      }
      return (
        <NavLink to={prop.layout + prop.path} key={prop.name}>
          {activeRoute(prop.layout + prop.path) === "active" ? (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg={activeBg}
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
              borderRadius="15px"
              _hover="none"
              w="90%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg="teal.300"
                    color="white"
                    h="50px"
                    w="50px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={activeColor} my="auto" fontSize="sm">
                  { unCollapse && prop.name}
                </Text>
              </Flex>
            </Button>
          ) : (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg="transparent"
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              py="12px"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg={inactiveBg}
                    color="teal.300"
                    h="50px"
                    w="50px"
                    me="12px"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={inactiveColor} my="auto" fontSize="sm">
                  { unCollapse && prop.name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      );
    });
  };

    const links = <>{createLinks(routes)}</>;

  return (
    <>
        <Box pt={"25px"} mb="12px">
            <Link
                width={unCollapse ? "100% ": "88px"}
                href={`${process.env.PUBLIC_URL}/#/`}
                // target="_blank"
                display="flex"
                lineHeight="100%"
                mb="30px"
                fontWeight="bold"
                justifyContent="center"
                alignItems="center"
                fontSize="11px"
            >
                <CreativeTimLogo w="32px" h="32px" me="10px" />
                {unCollapse && (<Text fontSize="sm" mt="3px">{logoText}</Text>)}
            </Link>
            <Separator uncollapse={unCollapse}></Separator>
        </Box>
        <Stack direction="column" mb="40px" mt="80px">
            <Box mx={unCollapse && "20px"}>{links}</Box>

        </Stack>
        <NavLink to="/auth/signin" key="Sign In" >
            <Flex flexWrap="nowrap" w={'420px'} >
                <Avatar
                    w={unCollapse ? '60px' : '40px'}
                    h={unCollapse ? '60px' : '40px'}
                    ml={unCollapse ? '30px' : '20px'}
                    mt='40px'
                    // src='https://bit.ly/sage-adebayo'
                />
                {unCollapse && (<Box ml='2' mt='50px'>
                    <Text fontWeight='bold'>
                        Segun Adebayo
                        <Badge ml='1' colorScheme='green'>
                            New
                        </Badge>
                    </Text>
                    <Text fontSize='sm'>UI Engineer</Text>
                </Box>)}
            </Flex>
        </NavLink>
    </>
  )
}

export default SidebarContent