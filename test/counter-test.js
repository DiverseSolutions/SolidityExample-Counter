const { expect } = require("chai")

describe("Counter", function () {
  it("Counter Increment Test", async function () {
    const Counter = await ethers.getContractFactory("Counter")
    const contract = await Counter.deploy()
    await contract.deployed()

    expect(await contract.count()).to.equal("0")

    await (await contract.inc()).wait()

    expect(await contract.count()).to.equal("1")
  });

  it("Counter Decrement Test", async function () {
    const Counter = await ethers.getContractFactory("Counter")
    const contract = await Counter.deploy()
    await contract.deployed()

    expect(await contract.count()).to.equal("0")

    await (await contract.dec()).wait()

    expect(await contract.count()).to.equal("-1")
  })
});
