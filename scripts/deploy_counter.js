async function main() {
  const contract = await ethers.getContractFactory("Counter");
  const instance = await contract.deploy();

  console.log("Counter deployed to:", instance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
