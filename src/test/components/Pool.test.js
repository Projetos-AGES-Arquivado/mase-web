import React from "react";
import Immutable from "immutable";
import { shallow } from "enzyme";
import Pool from "components/Pool";

describe("Components::Pool", () => {
  let props;
  beforeEach(() => {
    props = {
      pool: Immutable.fromJS({
        fetching: false,
        fetched: false,
        error: true,
        candidates: null
      })
    };
  });

  function renderDoc() {
    return shallow(<Pool {...props} />);
  }

  it("renders error message", () => {
    let doc = renderDoc();
    let node = doc.find("#pool-error");
    expect(node).not.toBeUndefined();
  });
});
