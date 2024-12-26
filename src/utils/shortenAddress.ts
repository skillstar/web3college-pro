export const shortenAddress = (address: string | undefined): string => {  
  if (!address) return "";  
  return `${address.slice(0, 6)}...${address.slice(-4)}`;  
};  

export const formatBalance = (balance: string | undefined, symbol: string | undefined): string => {  
  if (!balance || !symbol) return "";  
  const formattedBalance = parseFloat(balance).toFixed(4);  
  return `${formattedBalance} ${symbol}`;  
};