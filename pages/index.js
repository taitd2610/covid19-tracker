import Head from "next/head";

import Header from "../components/Header";
import OverviewCard from "../components/OverviewCard";

export default function Home({ data }) {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="">
      <Header />
      <main className="p-4">
        <OverviewCard data={data} />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
