/// <reference types="cypress" />


describe('Tax SG Api Testing',()=>{
    it('should be able to download a receipt',() => {
        cy.request({
            method: 'GET', 
            url: 'tax-invoice/160505095490032807',
            headers: {
                Authorization : 'Bearer eyJraWQiOiJyUUZUc1Zvd2J3cmZBbG01b2p2XC9GTXdsdms4TkpcL0krcUZiZmFjdHI2ZVU9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJlNzI2ZjczNi05YWQzLTQ0ODEtYjdkYi1kYjk4MTgzOTNhMzIiLCJjdXN0b206c2hvd19wcml2YWN5X3BvbGljeSI6IjEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV9xcGlSQmMwM1UiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOnRydWUsImNvZ25pdG86dXNlcm5hbWUiOiJlNzI2ZjczNi05YWQzLTQ0ODEtYjdkYi1kYjk4MTgzOTNhMzIiLCJhdWQiOiI0ZXJxZmF0YnNocDM3OXZhZDlhY2EzNDc2MiIsImV2ZW50X2lkIjoiM2Q4YjYyMjktYjZiMS00YmM0LTk4Y2MtODk4NGJkODUxMjY5IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NzE2OTM5MzEsIm5hbWUiOiIxMjM0NTY3ODkwYWJjZGVmZ2hpajEyMzQ1Njc4OTBhYmNkZWZnaGlqIiwicGhvbmVfbnVtYmVyIjoiKzY1MTExNTExMSIsImV4cCI6MTY3MTk0Mzg1OSwiaWF0IjoxNjcxODU3NDU5LCJlbWFpbCI6ImFuZ2VsYS5jaHVuQGZsYXNoLWNvZmZlZS5jb20ifQ.S8hX8DMXXEgXy0ebzn-Eb5Dkula5QihAPT3AIXe4Efs-heWxqBpJXu47tGbtiu6ehH4HGav7xQLILNNibxwtvzibBkIW1iIX5AIel1rM4zn7WxZLu40DTh3PiqP0r_AKdocYziD9RGaiHwc9NUQNVKt_07TDXiBIG5DjAskUP7UONH20bwOeWuNI92ZQmWa89KkT_QiVYBXo8WWI5FsJXPlykqpuNri3gMc_F0i5d--KuCl4McUjPHQ8UPRgxLizBndKbDpDi-0jWIlw3Nut6wTQN9Mj6dlJrV1hjtV1dLoll53nxvi5Gv2iZmLK1ITbfugD-zt2yxd0kQPr3SYGyg',   
                accept: 'application/json'
            }            
          }).then((response)=>{
            cy.log(JSON.stringify(response.body))
          })
    })
    it.only('API Product Detail',() => {
      cy.request({
        method: 'GET', 
        url: 'store-product/store-products/detail/898d12dc-b4a4-11ec-9298-0ad64c6be1ec/96aa6326-5367-48db-991d-152da337ecc0',
      }).then((response)=>{
        cy.log(JSON.stringify(response.body))
     })
  })
})