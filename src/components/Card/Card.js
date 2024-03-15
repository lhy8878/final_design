import { Box, useStyleConfig } from "@chakra-ui/react";
function Card(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("Card", { variant });
  const animationStyles = useStyleConfig("CardAnimation");
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      <Box __css={animationStyles}>
      {children}
      </Box>
    </Box>
  );
}

export default Card;
