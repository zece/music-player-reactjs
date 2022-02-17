import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "reset-css";
import PlayerLayout from "../components/playerLayout";

const theme = extendTheme({
  // colors: {
  //   gray: {
  //     100: "#f5f5f5",
  //     200: "#eeeeee",
  //     300: "#e0e0e0",
  //   },
  // },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  );
};

export default MyApp;
