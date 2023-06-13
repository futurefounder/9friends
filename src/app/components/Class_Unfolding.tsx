"use client";

import { Client } from "@notionhq/client";

// secret_nskaCfGoxUW5zlcjgs917PS5NUi3j1XidSBSu2r7Vrc

export default function Class_Unfolding() {
  return <div></div>;
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseID = "0a29f9f403c64bcb977d4ad96cf6ca50";
}
