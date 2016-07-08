/*
{
  "id": "PAY-0FK80412GA036825DK575NOQ",
  "intent": "sale",
  "state": "approved",
  "cart": "18S76946FH4421140",
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
      "total": "13.99",
      "currency": "USD",
      "details": {}
    },
    "payee": {
      "merchant_id": "NH3LNT686JAGL"
    },
    "description": "base",
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
        "id": "4UR34883PM619583H",
        "state": "completed",
        "amount": {
          "total": "13.99",
          "currency": "USD",
          "details": {
            "subtotal": "13.99"
          }
        },
        "payment_mode": "INSTANT_TRANSFER",
        "protection_eligibility": "ELIGIBLE",
        "protection_eligibility_type": "ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE",
        "transaction_fee": {
          "value": "0.78",
          "currency": "USD"
        },
        "parent_payment": "PAY-0FK80412GA036825DK575NOQ",
        "create_time": "2016-07-08T16:37:22Z",
        "update_time": "2016-07-08T16:37:23Z",
        "links": [{
          "href": "https://api.sandbox.paypal.com/v1/payments/sale/4UR34883PM619583H",
          "rel": "self",
          "method": "GET"
        }, {
          "href": "https://api.sandbox.paypal.com/v1/payments/sale/4UR34883PM619583H/refund",
          "rel": "refund",
          "method": "POST"
        }, {
          "href": "https://api.sandbox.paypal.com/v1/payments/payment/PAY-0FK80412GA036825DK575NOQ",
          "rel": "parent_payment",
          "method": "GET"
        }]
      }
    }]
  }],
  "create_time": "2016-07-08T16:37:23Z",
  "links": [{
    "href": "https://api.sandbox.paypal.com/v1/payments/payment/PAY-0FK80412GA036825DK575NOQ",
    "rel": "self",
    "method": "GET"
  }],
  "httpStatusCode": 200
}
*/
