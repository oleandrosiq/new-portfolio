import { GetServerSideProps } from "next";

export default function Home() {
  return <h1>Hello World</h1>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
    redirect: {
      destination: '/me/bio',
      permanent: false,
    }
  }
}
