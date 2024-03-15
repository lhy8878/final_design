// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection="row" pt={{ base: "120px", md: "75px" }} align="center" justify="center">
      <Flex flexDirection="column" p="30px" align="center" justify="center">
        <MiniStatistics
            title={"Today's Moneys"}
            amount={"$53,000"}
            percentage={55}
            icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
            title={"Today's Users"}
            amount={"2,300"}
            percentage={5}
            icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
            title={"New Clients"}
            amount={"+3,020"}
            percentage={-14}
            icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
            title={"Total Sales"}
            amount={"$173,000"}
            percentage={8}
            icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </Flex>
      <Flex flexDirection="column" align="center" justify="center">
        <BuiltByDevelopers
            title={"Built by Developers"}
            name={"Purity UI Dashboard"}
            description={
              "From colors, cards, typography to complex elements, you will find the full documentation."
            }
            image={
              <Image
                  src={logoChakra}
                  alt='chakra image'
                  minWidth={{ md: "300px", lg: "auto" }}
              />
            }
        />
      </Flex>
    </Flex>
  );
}
