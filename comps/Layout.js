import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Weather</title>
    </Head>
    {children}
  </>
);

export default Layout;
