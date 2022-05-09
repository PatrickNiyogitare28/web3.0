const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions  = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  }
  catch(error){
    console.error(error);
    process.exit(1);
  }
}

runMain();

// transaction deployed to 0x8c0799B68021c3Ee4125CA6E4C458855E8E7A096