import bitcoinReducer from "./bitcoin";
import { FETCH_BITCOIN } from "../constants";

describe("bitcoinReducer", () => {
  const bitcoinData = { bpi: "bitcoin price index" };
  it("fetches and sets the bitcoin data", () => {
    const output = bitcoinReducer(
      {},
      { type: FETCH_BITCOIN, bitcoin: bitcoinData }
    );
    expect(output).toEqual(bitcoinData);
  });
});
