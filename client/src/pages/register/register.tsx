import React from "react";
import { Box, Flex, useToast } from "@chakra-ui/react";
import * as Yup from "yup";

import AuthLayout from "../../components/auth-layout/auth-layout";
import { User } from "../../redux/user/user.types";
import { bindActionCreators, Dispatch } from "redux";
import { setCurrentUser } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { Field, FieldProps, Formik } from "formik";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query-pro";
import { BASE_URL, getHeaders } from "../../utils/api.utils";
import FormInput from "../../components/form-input/form-input.component";
import LinkItem from "../../components/link-item/link-item.component";
import { COLORS } from "../../styles/theme";
import CustomButton from "../../components/custom-button/custom-button.component";
import { saveItemToStorage, USER_TOKEN_KEY } from "../../utils/utils";
import { ArrowForwardIcon } from "@chakra-ui/icons";

type FormValues = {
  name: string;
  age: number;
  email: string;
  phone: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  age: Yup.number().required("Please enter your age"),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
  phone: Yup.string().required("Phone Number is required"),
  password: Yup.string().required("Password is required"),
});

type Props = LinkDispatchProps;

const Register: React.FC<Props> = ({ setCurrentUser }) => {
  const toast = useToast();
  const history = useHistory();
  const initialValues: FormValues = {
    name: "",
    age: 0,
    email: "",
    phone: "",
    password: "",
  };

  const { isLoading, createQuery } = useQuery({
    method: "POST",
    url: `${BASE_URL}/auth/register`,
    headers: getHeaders(),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await createQuery(values);

      const { token, data } = response || {};

      delete data.password;

      saveItemToStorage({
        itemKey: USER_TOKEN_KEY,
        storage: localStorage,
        item: token,
      });
      setCurrentUser(data);
      toast({
        status: "success",
        title: "Registrations Success!",
        description: "You've successfully registered!",
        duration: 3000,
      });
      history.push("/");
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message;
      const errorArray = error?.response?.data?.err;
      const errorResponse =
        errorArray && errorArray.length > 0
          ? error?.response?.data?.err[0]?.msg
          : errorMessage
          ? errorMessage
          : "Something went wrong. Please try again";
      toast({
        status: "error",
        title: "Registration Error",
        description: errorResponse,
        duration: 3000,
      });
    }
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Enter your email and set a password to begin"
    >
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }: any) => (
          <Box
            as="form"
            mx="auto"
            maxW="500px"
            w="100%"
            minH="50vh"
            mt={6}
            d="flex"
            flexDir="column"
            onSubmit={handleSubmit}
          >
            <Field name="name">
              {({ field, form }: FieldProps) => {
                const { name } = field;
                const { errors, touched } = form;

                return (
                  <FormInput
                    {...field}
                    error={errors[name]}
                    isTouched={touched[name]}
                    h="3rem"
                    formControlProps={{ my: 2 }}
                    placeholder="Name"
                  />
                );
              }}
            </Field>

            <Field name="age">
              {({ field, form }: FieldProps) => {
                const { name } = field;
                const { errors, touched } = form;

                return (
                  <FormInput
                    {...field}
                    type="number"
                    error={errors[name]}
                    isTouched={touched[name]}
                    h="3rem"
                    formControlProps={{ my: 2 }}
                    placeholder="Age"
                  />
                );
              }}
            </Field>

            <Field name="email">
              {({ field, form }: FieldProps) => {
                const { name } = field;
                const { errors, touched } = form;

                return (
                  <FormInput
                    {...field}
                    error={errors[name]}
                    isTouched={touched[name]}
                    type="email"
                    h="3rem"
                    formControlProps={{ my: 2 }}
                    placeholder="Email"
                  />
                );
              }}
            </Field>

            <Field name="phone">
              {({ field, form }: FieldProps) => {
                const { name } = field;
                const { errors, touched } = form;

                return (
                  <FormInput
                    {...field}
                    error={errors[name]}
                    isTouched={touched[name]}
                    h="3rem"
                    formControlProps={{ my: 2 }}
                    placeholder="Phone Number"
                  />
                );
              }}
            </Field>

            <Field name="password">
              {({ field, form }: FieldProps) => {
                const { name } = field;
                const { errors, touched } = form;

                return (
                  <FormInput
                    {...field}
                    error={errors[name]}
                    isTouched={touched[name]}
                    h="3rem"
                    type="password"
                    formControlProps={{ my: 2 }}
                    placeholder="Password"
                    showRightElement
                  />
                );
              }}
            </Field>

            <Flex mt={8} justify="center">
              <CustomButton
                textTransform="capitalize"
                maxW="10rem"
                w={{ base: "60%", sm: "50%" }}
                fontSize="1rem"
                type="submit"
                isLoading={isLoading}
              >
                <Flex align="center">
                  <Box fontSize="14px">Create Account</Box>
                  <ArrowForwardIcon ml="0.5rem" />
                </Flex>
              </CustomButton>
            </Flex>

            <Flex
              mx="auto"
              align="center"
              mt={8}
              mb={8}
              fontSize={{ base: "0.7rem", md: "0.8rem" }}
            >
              Already have an account?{" "}
              <LinkItem
                isAnchor
                ml="4px"
                aria-label="login"
                url="/login"
                color={COLORS.PRIMARY_COLOR}
                _hover={{ color: "blue" }}
              >
                Login
              </LinkItem>{" "}
            </Flex>
          </Box>
        )}
      </Formik>
    </AuthLayout>
  );
};

type LinkDispatchProps = {
  setCurrentUser: (currentUser: User) => void;
};

const mapDispatchToProps = (dispatch: Dispatch): LinkDispatchProps => ({
  setCurrentUser: bindActionCreators(setCurrentUser, dispatch),
});

export default connect(null, mapDispatchToProps)(Register);
