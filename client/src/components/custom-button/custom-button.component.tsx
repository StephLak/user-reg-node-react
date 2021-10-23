import { Button, ButtonProps, Spinner } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../styles/theme";

export type CustomButtonProps = {
  to?: string;
} & ButtonProps;

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <Button
      overflowX="hidden"
      rounded="5px"
      fontSize="0.7rem"
      border="1px solid white"
      boxShadow="0px 8px 5px rgba(75, 93, 104, 0.1)"
      bgColor={COLORS.PRIMARY_COLOR}
      color="white"
      fontWeight="medium"
      h="2rem"
      _focus={{
        border: "none",
      }}
      spinner={<Spinner />}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
