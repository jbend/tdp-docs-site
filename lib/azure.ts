import { TableClient } from "@azure/data-tables";
// const env = require("../configure/env");

// const NEXT_PUBLIC_AZURE_TABLES_CONNECTION_STRING = 'DefaultEndpointsProtocol=https;AccountName=tdp-docs-db;AccountKey=qU8OhcxZ3yW2vBx1hl4p3NylE8LWohnZCuuxI1nKc19z8PgCKNTkYEy9C5RFUeiw68mf6PPTM2MBaemGDL9lLg==;TableEndpoint=https://tdp-docs-db.table.cosmos.azure.com:443/;';
// const NEXT_PUBLIC_TABLE_MARKDOWN_LINKS = 'MarkdownLinks';

const serviceClient = null; //TableClient.fromConnectionString(
//   process.env.AZURE_TABLES_CONNECTION_STRING,
//   process.env.TABLE_MARKDOWN_LINKS
// );

export interface MarkdownLink {
  etag: string;
  category: string;
  title: string;
  url: string;
  partitionKey: string;
  rowKey: string;
  key: string;
  timestamp: string;
}

export interface GetEntitiesResponse {
  entities: MarkdownLink[];
}

export const getEntities = async function () {
  const entitiesArray = [];
  const entities = serviceClient.listEntities();

  for await (const entity of entities) {
    entitiesArray.push(entity);
  }
  return entitiesArray;
};

export const insertEntity = async function (entity: MarkdownLink) {
  await serviceClient.createEntity(entity);
};