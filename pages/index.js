import Head from "next/head";
import DetailCard from "../components/DetailCard";

import Header from "../components/Header";
import OverviewCard from "../components/OverviewCard";

export default function Home({ result, casesByCity }) {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="">
      <Header />
      <main className="p-4">
        <OverviewCard data={result} />
        <DetailCard data={casesByCity} />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://sheetdb.io/api/v1/oicq1zp0cykpn/`);
  const data = await res.json();
  const result = data[0];

  const detail = await fetch(
    `https://sheetdb.io/api/v1/oicq1zp0cykpn/?sheet=detail`
  );
  const casesByCity = await detail.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { result, casesByCity }, // will be passed to the page component as props
  };
}
