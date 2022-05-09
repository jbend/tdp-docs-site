import { TableClient } from "@azure/data-tables";
const serviceClient = null; //TableClient.fromConnectionString(
  process.env.AZURE_TABLES_CONNECTION_STRING,
  process.env.TABLE_MARKDOWN_LINKS
);

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