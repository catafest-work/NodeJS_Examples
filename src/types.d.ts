import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";
declare const tables: readonly [
  {
    readonly name: "test";
    readonly columns: readonly [];
  }
];
export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;
export type Test = InferredTypes["test"];
export type TestRecord = Test & XataRecord;
export type DatabaseSchema = {
  test: TestRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};
