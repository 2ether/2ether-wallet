"use strict";
var nodes = function() {};
nodes.customNode = require("./nodeHelpers/customNode");
nodes.infuraNode = require("./nodeHelpers/infura");
nodes.metamaskNode = require("./nodeHelpers/metamask");
nodes.nodeTypes = {
	ET2: "ET2",
	ETH: "ETH",
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETH];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
	name: "CUS",
	blockExplorerTX: "",
	blockExplorerAddr: "",
	type: nodes.nodeTypes.Custom,
	eip155: false,
	chainId: "",
	tokenList: [],
	abiList: [],
	service: "Custom",
	lib: null
};
nodes.nodeList = {
	et2_mew: {
		name: "ET2",
		blockExplorerTX: "https://explorer.2ether.com/tx/[[txHash]]",
		blockExplorerAddr: "https://explorer.2ether.com/address/[[address]]",
		type: nodes.nodeTypes.ET2,
		eip155: true,
		chainId: 1,
		tokenList: require("./tokens/ethTokens.json"),
		abiList: require("./abiDefinitions/ethAbi.json"),
		service: "wallet.2ether.com",
		lib: new nodes.customNode("https://api.wallet.2ether.com/eth", "")
	},
	eth_mew: {
		name: "ETH",
		blockExplorerTX: "https://etherscan.io/tx/[[txHash]]",
		blockExplorerAddr: "https://etherscan.io/address/[[address]]",
		type: nodes.nodeTypes.ETH,
		eip155: true,
		chainId: 1,
		tokenList: require("./tokens/ethTokens.json"),
		abiList: require("./abiDefinitions/ethAbi.json"),
		service: "myetherwallet.com",
		lib: new nodes.customNode("https://api.myetherwallet.com/eth", "")
	},
	eth_ethscan: {
		name: "ETH",
		blockExplorerTX: "https://etherscan.io/tx/[[txHash]]",
		blockExplorerAddr: "https://etherscan.io/address/[[address]]",
		type: nodes.nodeTypes.ETH,
		eip155: true,
		chainId: 1,
		tokenList: require("./tokens/ethTokens.json"),
		abiList: require("./abiDefinitions/ethAbi.json"),
		service: "etherscan.io",
		lib: require("./nodeHelpers/etherscan")
	},
};

nodes.ethPrice = require("./nodeHelpers/ethPrice");
module.exports = nodes;
