let data = require('./data')

// JS object to JSON
// JSON.stringify

// JSON to JS object
// JSON.parse

function getInvoice(rawData) {
  return rawData["Invoices"][0]
}

function getFirstValidInvoiceAddress() {

}

function getContactAddress(rawData) {
  let invoice = getInvoice(rawData)
  let address = getFirstValidInvoiceAddress(invoice)

  let myAddressProperties = Object.keys(address).filter(function(item){
    return item !== 'AddressType'
  })

  let myAddress = {}
  for(let i = 0; i < myAddressProperties.length; i++) {
    myAddress[myAddressProperties[i]] = address[myAddressProperties[i]]
  }

  return myAddress
}



function printInvoice(rawData) {
  console.log(getInvoice(rawData))
}

printInvoice(data)
