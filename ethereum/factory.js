import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x483A1cdC3E13Cde7528c745977d137d40c823fA6"
);

export default instance;
