import axios from "axios";

export default function useOpenSea() {
  const fetchAllTLBanks = async () => {
    try {
      const headers = {
        "x-api-key": `${process.env.REACT_APP_OPENSEA_API_KEY}`,
      };

      const response = await axios.get(
        "https://api.opensea.io/api/v2/collection/timelockedbank/nfts",
        { headers },
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchAllTLBanks };
}
