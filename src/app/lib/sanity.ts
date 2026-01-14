// src/app/lib/sanity.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "as8zjuq9",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

// import { createClient } from "@sanity/client"
// import { projectId, dataset, apiVersion } from "../"

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true,
// })
