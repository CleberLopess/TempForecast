import React from "react";
import CardsDays from "../components/GroupTemp";
import Layout from "../components/Layout";

export default function index() {
  return (
    <Layout>
      <CardsDays title="hoje" tempMax={42} tempMin={35} />
      <CardsDays title="amanha" tempMax={99} tempMin={10} />
      <CardsDays title="segunda" tempMax={55} tempMin={40} />
      <CardsDays title="terça" tempMax={22} tempMin={-10} />
    </Layout>
  );
}
