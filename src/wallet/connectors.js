import { InjectedConnector } from "@web3-react/injected-connector";

export const injectors = new InjectedConnector({
  /* supported chain ids, when connected with metamask. kovan is 42. eth is 1 */
  supportedChainIds: [42]
});
