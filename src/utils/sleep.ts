const sleep = (ms:number): Promise<unknown> => new Promise((resolve) => setTimeout(resolve, ms));

export default sleep;
