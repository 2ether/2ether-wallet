'use strict'
var globalService = function($http, $httpParamSerializerJQLike) {

  globalFuncs.checkAndRedirectHTTPS()
  ajaxReq.http = $http
  ajaxReq.postSerializer = $httpParamSerializerJQLike
  ajaxReq.getETHvalue = nodes.ethPrice.getETHvalue
  ajaxReq.getRates = nodes.ethPrice.getRates

  var tabs = {
    viewWalletInfo: {
      id: 0,
      name: "NAV_ViewWallet",
      url: "view-wallet-info",
      mew: true,
      cx: false
    },
  generateWallet: {
    id: 1,
    name: "NAV_GenerateWallet_alt",
    url: "generate-wallet",
    mew: true,
    cx: false
  },
  myWallet: {
    id: 2,
    name: "NAV_MyWallets",
    url: "my-wallet",
    mew: false,
    cx: true
  },
  addWallet: {
    id: 3,
    name: "NAV_AddWallet",
    url: "add-wallet",
    mew: false,
    cx: true
  },
  sendTransaction: {
    id: 4,
    name: "NAV_SendEther",
    url: "send-transaction",
    mew: true,
    cx: true
  },
  }

  var currentTab = 0
  if(typeof chrome != 'undefined')
    currentTab = chrome.windows === undefined ? 0 : 3
  return {
    tabs: tabs,
    currentTab: currentTab
  }

  var tokensLoaded = false

}

module.exports = globalService


