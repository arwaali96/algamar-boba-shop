import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Algamar Boba</title>
      </Head>

      <Header />

      <main className="max-w-screen-lg mx-auto">
        <Banner />

        {/* ProductFeed */}
      </main>
    </div>
  );
}
