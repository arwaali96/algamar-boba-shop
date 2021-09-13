import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { useSession } from "next-auth/client";

export default function Home({ products }) {  
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Algamar Boba</title>
      </Head>

      <Header />

      <main className="max-w-screen-lg mx-auto">
        <Banner />

        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const products = await fetch("https://fakestoreapi.com/products").then(
  //   (res) => res.json()
  // );

  const products = await fetch("https://jsonkeeper.com/b/RS0Q").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
