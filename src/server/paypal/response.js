/*
{
  "id": "PAY-8R387998GW198602EK57WPMY",
  "intent": "sale",
  "state": "approved",
  "cart": "5VX391607U750764S",
  "payer": {
    "payment_method": "paypal",
    "status": "VERIFIED",
    "payer_info": {
      "email": "recieve-buyer@ghoststruggle.com",
      "first_name": "test",
      "last_name": "buyer",
      "payer_id": "KRSVF45E2NK8W",
      "shipping_address": {
        "recipient_name": "test buyer",
        "line1": "Nárožní 11",
        "city": "Praha 13",
        "state": "Česká Republika",
        "postal_code": "158 00",
        "country_code": "CZ"
      },
      "country_code": "CZ",
      "billing_address": {
        "line1": "Nárožní 11",
        "line2": "",
        "city": "Praha 13",
        "state": "Česká Republika",
        "postal_code": "158 00",
        "country_code": "CZ"
      }
    }
  },
  "transactions": [{
    "amount": {
      "total": "7.47",
      "currency": "USD",
      "details": {}
    },
    "payee": {
      "merchant_id": "NH3LNT686JAGL"
    },
    "description": "This is the payment transaction description.",
    "item_list": {
      "shipping_address": {
        "recipient_name": "test buyer",
        "line1": "Nárožní 11",
        "city": "Praha 13",
        "state": "Česká Republika",
        "postal_code": "158 00",
        "country_code": "CZ"
      }
    },
    "related_resources": [{
      "sale": {
        "id": "4SP35708X7194500R",
        "state": "completed",
        "amount": {
          "total": "7.47",
          "currency": "USD",
          "details": {
            "subtotal": "7.47"
          }
        },
        "payment_mode": "INSTANT_TRANSFER",
        "protection_eligibility": "ELIGIBLE",
        "protection_eligibility_type": "ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE",
        "transaction_fee": {
          "value": "0.55",
          "currency": "USD"
        },
        "parent_payment": "PAY-8R387998GW198602EK57WPMY",
        "create_time": "2016-07-08T08:43:51Z",
        "update_time": "2016-07-08T08:43:51Z",
        "links": [{
          "href": "https://api.sandbox.paypal.com/v1/payments/sale/4SP35708X7194500R",
          "rel": "self",
          "method": "GET"
        }, {
          "href": "https://api.sandbox.paypal.com/v1/payments/sale/4SP35708X7194500R/refund",
          "rel": "refund",
          "method": "POST"
        }, {
          "href": "https://api.sandbox.paypal.com/v1/payments/payment/PAY-8R387998GW198602EK57WPMY",
          "rel": "parent_payment",
          "method": "GET"
        }]
      }
    }]
  }],
  "create_time": "2016-07-08T08:43:52Z",
  "links": [{
    "href": "https://api.sandbox.paypal.com/v1/payments/payment/PAY-8R387998GW198602EK57WPMY",
    "rel": "self",
    "method": "GET"
  }],
  "httpStatusCode": 200
}
*/
