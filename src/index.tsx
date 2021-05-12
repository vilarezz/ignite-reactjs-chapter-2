import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Comprar mesa de chão',
          type: 'withdraw',
          category: 'Ergonomics',
          amount: 6000,
          createdAt: new Date('2021-02-12 07:34:30'),
        },
        {
          id: 2,
          title: 'Comprar Macbook Pro M1',
          type: 'withdraw',
          category: 'T.I',
          amount: 1100,
          createdAt: new Date('2021-02-12 22:45:00'),
        },
        {
          id: 3,
          title: 'Pagamento da OneRPM',
          type: 'deposit',
          category: 'T.I',
          amount: 134400,
          createdAt: new Date('2021-02-12 22:45:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
