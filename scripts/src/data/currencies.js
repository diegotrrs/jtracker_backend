const currencies = {
  "DZD": {
     "currency_name": "Algerian Dinar ",
     "usd_to_currency": "117.49",

     "lifetime_budget": {
        "base_100": "10,000.00",
        "base_500": "60,000.00",
        "base_750": "90,000.00",
        "base_1000": "100,000.00",
        "base_5000": "600,000.00",
        "base_10000": "1,000,000.00"
     },

     "daily_budget": {
        "base_10": "1,000.00",
        "base_50": "6,000.00",
        "base_75": "9,000.00",
        "base_100": "10,000.00",
        "base_500": "60,000.00",
        "base_1000": "100,000.00"
     }
  },
  "ARS": {
     "currency_name": "Argentine Peso ",
     "usd_to_currency": "28.29",

     "lifetime_budget": {
        "base_100": "3,000.00",
        "base_500": "10,000.00",
        "base_750": "20,000.00",
        "base_1000": "30,000.00",
        "base_5000": "100,000.00",
        "base_10000": "300,000.00"
     },

     "daily_budget": {
        "base_10": "300.00",
        "base_50": "1,000.00",
        "base_75": "2,000.00",
        "base_100": "3,000.00",
        "base_500": "10,000.00",
        "base_1000": "30,000.00"
     }
  },
  "AUD": {
     "currency_name": "Australian Dollars ",
     "usd_to_currency": "1.35",

     "lifetime_budget": {
        "base_100": "100.00",
        "base_500": "700.00",
        "base_750": "1,000.00",
        "base_1000": "1,000.00",
        "base_5000": "7,000.00",
        "base_10000": "10,000.00"
     },

     "daily_budget": {
        "base_10": "10.00",
        "base_50": "70.00",
        "base_75": "100.00",
        "base_100": "100.00",
        "base_500": "700.00",
        "base_1000": "1,000.00"
     }
  },
  "BDT": {
     "currency_name": "Bangladesh Taka",
     "usd_to_currency": "84.32",

     "lifetime_budget": {
        "base_100": "8,000.00",
        "base_500": "40,000.00",
        "base_750": "60,000.00",
        "base_1000": "80,000.00",
        "base_5000": "400,000.00",
        "base_10000": "800,000.00"
     },

     "daily_budget": {
        "base_10": "800.00",
        "base_50": "4,000.00",
        "base_75": "6,000.00",
        "base_100": "8,000.00",
        "base_500": "40,000.00",
        "base_1000": "80,000.00"
     }
  },
  "BOB": {
     "currency_name": "Bolivian Boliviano",
     "usd_to_currency": "6.91",

     "lifetime_budget": {
        "base_100": "700.00",
        "base_500": "3,000.00",
        "base_750": "5,000.00",
        "base_1000": "7,000.00",
        "base_5000": "30,000.00",
        "base_10000": "70,000.00"
     },

     "daily_budget": {
        "base_10": "70.00",
        "base_50": "300.00",
        "base_75": "500.00",
        "base_100": "700.00",
        "base_500": "3,000.00",
        "base_1000": "7,000.00"
     }
  },
  "GBP": {
     "currency_name": "British Pound",
     "usd_to_currency": "0.76",

     "lifetime_budget": {
        "base_100": "80.00",
        "base_500": "400.00",
        "base_750": "600.00",
        "base_1000": "800.00",
        "base_5000": "4,000.00",
        "base_10000": "8,000.00"
     },

     "daily_budget": {
        "base_10": "7.00",
        "base_50": "40.00",
        "base_75": "60.00",
        "base_100": "80.00",
        "base_500": "400.00",
        "base_1000": "800.00"
     }
  },
  "BRL": {
     "currency_name": "Brazilian Real *",
     "usd_to_currency": "3.91",

     "lifetime_budget": {
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_750": "3,000.00",
        "base_1000": "4,000.00",
        "base_5000": "20,000.00",
        "base_10000": "40,000.00"
     },

     "daily_budget": {
        "base_10": "40.00",
        "base_50": "200.00",
        "base_75": "300.00",
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_1000": "4,000.00"
     }
  },
  "CAD": {
     "currency_name": "Canadian Dollars",
     "usd_to_currency": "1.31",

     "lifetime_budget": {
        "base_100": "100.00",
        "base_500": "700.00",
        "base_750": "1,000.00",
        "base_1000": "1,000.00",
        "base_5000": "7,000.00",
        "base_10000": "10,000.00"
     },

     "daily_budget": {
        "base_10": "10.00",
        "base_50": "70.00",
        "base_75": "100.00",
        "base_100": "100.00",
        "base_500": "700.00",
        "base_1000": "1,000.00"
     }
  },
  "CLP": {
     "currency_name": "Chilean Peso",
     "usd_to_currency": "657.76",

     "lifetime_budget": {
        "base_100": "70,000.00",
        "base_500": "300,000.00",
        "base_750": "500,000.00",
        "base_1000": "700,000.00",
        "base_5000": "3,000,000.00",
        "base_10000": "7,000,000.00"
     },

     "daily_budget": {
        "base_10": "7,000.00",
        "base_50": "30,000.00",
        "base_75": "50,000.00",
        "base_100": "70,000.00",
        "base_500": "300,000.00",
        "base_1000": "700,000.00"
     }
  },
  "CNY": {
     "currency_name": "Chinese Yuan",
     "usd_to_currency": "6.65",

     "lifetime_budget": {
        "base_100": "700.00",
        "base_500": "3,000.00",
        "base_750": "5,000.00",
        "base_1000": "7,000.00",
        "base_5000": "30,000.00",
        "base_10000": "70,000.00"
     },

     "daily_budget": {
        "base_10": "70.00",
        "base_50": "300.00",
        "base_75": "500.00",
        "base_100": "700.00",
        "base_500": "3,000.00",
        "base_1000": "7,000.00"
     }
  },
  "COP": {
     "currency_name": "Colombian Peso",
     "usd_to_currency": "2,931.05",

     "lifetime_budget": {
        "base_100": "300,000.00",
        "base_500": "1,000,000.00",
        "base_750": "2,000,000.00",
        "base_1000": "3,000,000.00",
        "base_5000": "10,000,000.00",
        "base_10000": "30,000,000.00"
     },

     "daily_budget": {
        "base_10": "30,000.00",
        "base_50": "100,000.00",
        "base_75": "200,000.00",
        "base_100": "300,000.00",
        "base_500": "1,000,000.00",
        "base_1000": "3,000,000.00"
     }
  },
  "CRC": {
     "currency_name": "Costa Rican Colon",
     "usd_to_currency": "567.25",

     "lifetime_budget": {
        "base_100": "60,000.00",
        "base_500": "300,000.00",
        "base_750": "400,000.00",
        "base_1000": "600,000.00",
        "base_5000": "3,000,000.00",
        "base_10000": "6,000,000.00"
     },

     "daily_budget": {
        "base_10": "6,000.00",
        "base_50": "30,000.00",
        "base_75": "40,000.00",
        "base_100": "60,000.00",
        "base_500": "300,000.00",
        "base_1000": "600,000.00"
     }
  },
  "CZK": {
     "currency_name": "Czech Republic Koruna",
     "usd_to_currency": "22.38",

     "lifetime_budget": {
        "base_100": "2,000.00",
        "base_500": "10,000.00",
        "base_750": "20,000.00",
        "base_1000": "20,000.00",
        "base_5000": "100,000.00",
        "base_10000": "200,000.00"
     },

     "daily_budget": {
        "base_10": "200.00",
        "base_50": "1,000.00",
        "base_75": "2,000.00",
        "base_100": "2,000.00",
        "base_500": "10,000.00",
        "base_1000": "20,000.00"
     }
  },
  "DKK": {
     "currency_name": "Danish Krone",
     "usd_to_currency": "6.39",

     "lifetime_budget": {
        "base_100": "600.00",
        "base_500": "3,000.00",
        "base_750": "5,000.00",
        "base_1000": "6,000.00",
        "base_5000": "30,000.00",
        "base_10000": "60,000.00"
     },

     "daily_budget": {
        "base_10": "60.00",
        "base_50": "300.00",
        "base_75": "500.00",
        "base_100": "600.00",
        "base_500": "3,000.00",
        "base_1000": "6,000.00"
     }
  },
  "EGP": {
     "currency_name": "Egyptian Pound",
     "usd_to_currency": "17.93",

     "lifetime_budget": {
        "base_100": "2,000.00",
        "base_500": "9,000.00",
        "base_750": "10,000.00",
        "base_1000": "20,000.00",
        "base_5000": "90,000.00",
        "base_10000": "200,000.00"
     },

     "daily_budget": {
        "base_10": "200.00",
        "base_50": "900.00",
        "base_75": "1,000.00",
        "base_100": "2,000.00",
        "base_500": "9,000.00",
        "base_1000": "20,000.00"
     }
  },
  "EUR": {
     "currency_name": "Euro",
     "usd_to_currency": "0.86",

     "lifetime_budget": {
        "base_100": "90.00",
        "base_500": "400.00",
        "base_750": "600.00",
        "base_1000": "900.00",
        "base_5000": "4,000.00",
        "base_10000": "9,000.00"
     },

     "daily_budget": {
        "base_10": "8.00",
        "base_50": "40.00",
        "base_75": "60.00",
        "base_100": "90.00",
        "base_500": "400.00",
        "base_1000": "900.00"
     }
  },
  "GTQ": {
     "currency_name": "Guatemalan Quetzal",
     "usd_to_currency": "7.50",

     "lifetime_budget": {
        "base_100": "800.00",
        "base_500": "4,000.00",
        "base_750": "6,000.00",
        "base_1000": "8,000.00",
        "base_5000": "40,000.00",
        "base_10000": "80,000.00"
     },

     "daily_budget": {
        "base_10": "80.00",
        "base_50": "400.00",
        "base_75": "600.00",
        "base_100": "800.00",
        "base_500": "4,000.00",
        "base_1000": "8,000.00"
     }
  },
  "HNL": {
     "currency_name": "Honduran Lempira",
     "usd_to_currency": "23.95",

     "lifetime_budget": {
        "base_100": "2,000.00",
        "base_500": "10,000.00",
        "base_750": "20,000.00",
        "base_1000": "20,000.00",
        "base_5000": "100,000.00",
        "base_10000": "200,000.00"
     },

     "daily_budget": {
        "base_10": "200.00",
        "base_50": "1,000.00",
        "base_75": "2,000.00",
        "base_100": "2,000.00",
        "base_500": "10,000.00",
        "base_1000": "20,000.00"
     }
  },
  "HKD": {
     "currency_name": "Hong Kong Dollar",
     "usd_to_currency": "7.85",

     "lifetime_budget": {
        "base_100": "800.00",
        "base_500": "4,000.00",
        "base_750": "6,000.00",
        "base_1000": "8,000.00",
        "base_5000": "40,000.00",
        "base_10000": "80,000.00"
     },

     "daily_budget": {
        "base_10": "80.00",
        "base_50": "400.00",
        "base_75": "600.00",
        "base_100": "800.00",
        "base_500": "4,000.00",
        "base_1000": "8,000.00"
     }
  },
  "HUF": {
     "currency_name": "Hungarian Forint ",
     "usd_to_currency": "281.34",

     "lifetime_budget": {
        "base_100": "30,000.00",
        "base_500": "100,000.00",
        "base_750": "200,000.00",
        "base_1000": "300,000.00",
        "base_5000": "1,000,000.00",
        "base_10000": "3,000,000.00"
     },

     "daily_budget": {
        "base_10": "3,000.00",
        "base_50": "10,000.00",
        "base_75": "20,000.00",
        "base_100": "30,000.00",
        "base_500": "100,000.00",
        "base_1000": "300,000.00"
     }
  },
  "ISK": {
     "currency_name": "Icelandic Krona ",
     "usd_to_currency": "106.88",

     "lifetime_budget": {
        "base_100": "10,000.00",
        "base_500": "50,000.00",
        "base_750": "80,000.00",
        "base_1000": "100,000.00",
        "base_5000": "500,000.00",
        "base_10000": "1,000,000.00"
     },

     "daily_budget": {
        "base_10": "1,000.00",
        "base_50": "5,000.00",
        "base_75": "8,000.00",
        "base_100": "10,000.00",
        "base_500": "50,000.00",
        "base_1000": "100,000.00"
     }
  },
  "INR": {
     "currency_name": "Indian Rupee",
     "usd_to_currency": "68.61",

     "lifetime_budget": {
        "base_100": "7,000.00",
        "base_500": "30,000.00",
        "base_750": "50,000.00",
        "base_1000": "70,000.00",
        "base_5000": "300,000.00",
        "base_10000": "700,000.00"
     },

     "daily_budget": {
        "base_10": "700.00",
        "base_50": "3,000.00",
        "base_75": "5,000.00",
        "base_100": "7,000.00",
        "base_500": "30,000.00",
        "base_1000": "70,000.00"
     }
  },
  "IDR": {
     "currency_name": "Indonesian Rupiah",
     "usd_to_currency": "14,382.00",

     "lifetime_budget": {
        "base_100": "1,000,000.00",
        "base_500": "7,000,000.00",
        "base_750": "10,000,000.00",
        "base_1000": "10,000,000.00",
        "base_5000": "70,000,000.00",
        "base_10000": "100,000,000.00"
     },

     "daily_budget": {
        "base_10": "100,000.00",
        "base_50": "700,000.00",
        "base_75": "1,000,000.00",
        "base_100": "1,000,000.00",
        "base_500": "7,000,000.00",
        "base_1000": "10,000,000.00"
     }
  },
  "ILS": {
     "currency_name": "Israeli New Shekel",
     "usd_to_currency": "3.65",

     "lifetime_budget": {
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_750": "3,000.00",
        "base_1000": "4,000.00",
        "base_5000": "20,000.00",
        "base_10000": "40,000.00"
     },

     "daily_budget": {
        "base_10": "40.00",
        "base_50": "200.00",
        "base_75": "300.00",
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_1000": "4,000.00"
     }
  },
  "JPY": {
     "currency_name": "Japanese Yen",
     "usd_to_currency": "110.91",

     "lifetime_budget": {
        "base_100": "10,000.00",
        "base_500": "60,000.00",
        "base_750": "80,000.00",
        "base_1000": "100,000.00",
        "base_5000": "600,000.00",
        "base_10000": "1,000,000.00"
     },

     "daily_budget": {
        "base_10": "1,000.00",
        "base_50": "6,000.00",
        "base_75": "8,000.00",
        "base_100": "10,000.00",
        "base_500": "60,000.00",
        "base_1000": "100,000.00"
     }
  },
  "KES": {
     "currency_name": "Kenyan Shilling",
     "usd_to_currency": "100.86",

     "lifetime_budget": {
        "base_100": "10,000.00",
        "base_500": "50,000.00",
        "base_750": "80,000.00",
        "base_1000": "100,000.00",
        "base_5000": "500,000.00",
        "base_10000": "1,000,000.00"
     },

     "daily_budget": {
        "base_10": "1,000.00",
        "base_50": "5,000.00",
        "base_75": "8,000.00",
        "base_100": "10,000.00",
        "base_500": "50,000.00",
        "base_1000": "100,000.00"
     }
  },
  "MOP": {
     "currency_name": "Macanese Pataca",
     "usd_to_currency": "8.08",

     "lifetime_budget": {
        "base_100": "800.00",
        "base_500": "4,000.00",
        "base_750": "6,000.00",
        "base_1000": "8,000.00",
        "base_5000": "40,000.00",
        "base_10000": "80,000.00"
     },

     "daily_budget": {
        "base_10": "80.00",
        "base_50": "400.00",
        "base_75": "600.00",
        "base_100": "800.00",
        "base_500": "4,000.00",
        "base_1000": "8,000.00"
     }
  },
  "MYR": {
     "currency_name": "Malaysian Ringgit",
     "usd_to_currency": "4.05",

     "lifetime_budget": {
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_750": "3,000.00",
        "base_1000": "4,000.00",
        "base_5000": "20,000.00",
        "base_10000": "40,000.00"
     },

     "daily_budget": {
        "base_10": "40.00",
        "base_50": "200.00",
        "base_75": "300.00",
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_1000": "4,000.00"
     }
  },
  "MXN": {
     "currency_name": "Mexican Peso",
     "usd_to_currency": "19.70",

     "lifetime_budget": {
        "base_100": "2,000.00",
        "base_500": "10,000.00",
        "base_750": "10,000.00",
        "base_1000": "20,000.00",
        "base_5000": "100,000.00",
        "base_10000": "200,000.00"
     },

     "daily_budget": {
        "base_10": "200.00",
        "base_50": "1,000.00",
        "base_75": "1,000.00",
        "base_100": "2,000.00",
        "base_500": "10,000.00",
        "base_1000": "20,000.00"
     }
  },
  "TWD": {
     "currency_name": "New Taiwan Dollar",
     "usd_to_currency": "30.56",

     "lifetime_budget": {
        "base_100": "3,000.00",
        "base_500": "20,000.00",
        "base_750": "20,000.00",
        "base_1000": "30,000.00",
        "base_5000": "200,000.00",
        "base_10000": "300,000.00"
     },

     "daily_budget": {
        "base_10": "300.00",
        "base_50": "2,000.00",
        "base_75": "2,000.00",
        "base_100": "3,000.00",
        "base_500": "20,000.00",
        "base_1000": "30,000.00"
     }
  },
  "NZD": {
     "currency_name": "New Zealand Dollar",
     "usd_to_currency": "1.48",

     "lifetime_budget": {
        "base_100": "100.00",
        "base_500": "700.00",
        "base_750": "1,000.00",
        "base_1000": "1,000.00",
        "base_5000": "7,000.00",
        "base_10000": "10,000.00"
     },

     "daily_budget": {
        "base_10": "10.00",
        "base_50": "70.00",
        "base_75": "100.00",
        "base_100": "100.00",
        "base_500": "700.00",
        "base_1000": "1,000.00"
     }
  },
  "NIO": {
     "currency_name": "Nicaraguan Cordoba",
     "usd_to_currency": "31.71",

     "lifetime_budget": {
        "base_100": "3,000.00",
        "base_500": "20,000.00",
        "base_750": "20,000.00",
        "base_1000": "30,000.00",
        "base_5000": "200,000.00",
        "base_10000": "300,000.00"
     },

     "daily_budget": {
        "base_10": "300.00",
        "base_50": "2,000.00",
        "base_75": "2,000.00",
        "base_100": "3,000.00",
        "base_500": "20,000.00",
        "base_1000": "30,000.00"
     }
  },
  "NGN": {
     "currency_name": "Nigerian Naira",
     "usd_to_currency": "360.07",

     "lifetime_budget": {
        "base_100": "40,000.00",
        "base_500": "200,000.00",
        "base_750": "300,000.00",
        "base_1000": "400,000.00",
        "base_5000": "2,000,000.00",
        "base_10000": "4,000,000.00"
     },

     "daily_budget": {
        "base_10": "4,000.00",
        "base_50": "20,000.00",
        "base_75": "30,000.00",
        "base_100": "40,000.00",
        "base_500": "200,000.00",
        "base_1000": "400,000.00"
     }
  },
  "NOK": {
     "currency_name": "Norwegian Krone",
     "usd_to_currency": "8.12",

     "lifetime_budget": {
        "base_100": "800.00",
        "base_500": "4,000.00",
        "base_750": "6,000.00",
        "base_1000": "8,000.00",
        "base_5000": "40,000.00",
        "base_10000": "80,000.00"
     },

     "daily_budget": {
        "base_10": "80.00",
        "base_50": "400.00",
        "base_75": "600.00",
        "base_100": "800.00",
        "base_500": "4,000.00",
        "base_1000": "8,000.00"
     }
  },
  "PKR": {
     "currency_name": "Pakistan Rupee",
     "usd_to_currency": "121.73",

     "lifetime_budget": {
        "base_100": "10,000.00",
        "base_500": "60,000.00",
        "base_750": "90,000.00",
        "base_1000": "100,000.00",
        "base_5000": "600,000.00",
        "base_10000": "1,000,000.00"
     },

     "daily_budget": {
        "base_10": "1,000.00",
        "base_50": "6,000.00",
        "base_75": "9,000.00",
        "base_100": "10,000.00",
        "base_500": "60,000.00",
        "base_1000": "100,000.00"
     }
  },
  "PYG": {
     "currency_name": "Paraguayan Guarani",
     "usd_to_currency": "5,693.25",

     "lifetime_budget": {
        "base_100": "600,000.00",
        "base_500": "3,000,000.00",
        "base_750": "4,000,000.00",
        "base_1000": "6,000,000.00",
        "base_5000": "30,000,000.00",
        "base_10000": "60,000,000.00"
     },

     "daily_budget": {
        "base_10": "60,000.00",
        "base_50": "300,000.00",
        "base_75": "400,000.00",
        "base_100": "600,000.00",
        "base_500": "3,000,000.00",
        "base_1000": "6,000,000.00"
     }
  },
  "PEN": {
     "currency_name": "Peruvian Nuevo Sol",
     "usd_to_currency": "3.29",

     "lifetime_budget": {
        "base_100": "300.00",
        "base_500": "2,000.00",
        "base_750": "2,000.00",
        "base_1000": "3,000.00",
        "base_5000": "20,000.00",
        "base_10000": "30,000.00"
     },

     "daily_budget": {
        "base_10": "30.00",
        "base_50": "200.00",
        "base_75": "200.00",
        "base_100": "300.00",
        "base_500": "2,000.00",
        "base_1000": "3,000.00"
     }
  },
  "PHP": {
     "currency_name": "Philippine Peso",
     "usd_to_currency": "53.41",

     "lifetime_budget": {
        "base_100": "5,000.00",
        "base_500": "30,000.00",
        "base_750": "40,000.00",
        "base_1000": "50,000.00",
        "base_5000": "300,000.00",
        "base_10000": "500,000.00"
     },

     "daily_budget": {
        "base_10": "500.00",
        "base_50": "3,000.00",
        "base_75": "4,000.00",
        "base_100": "5,000.00",
        "base_500": "30,000.00",
        "base_1000": "50,000.00"
     }
  },
  "PLN": {
     "currency_name": "Polish Zloty",
     "usd_to_currency": "3.77",

     "lifetime_budget": {
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_750": "3,000.00",
        "base_1000": "4,000.00",
        "base_5000": "20,000.00",
        "base_10000": "40,000.00"
     },

     "daily_budget": {
        "base_10": "40.00",
        "base_50": "200.00",
        "base_75": "300.00",
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_1000": "4,000.00"
     }
  },
  "QAR": {
     "currency_name": "Qatari Rials",
     "usd_to_currency": "3.64",

     "lifetime_budget": {
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_750": "3,000.00",
        "base_1000": "4,000.00",
        "base_5000": "20,000.00",
        "base_10000": "40,000.00"
     },

     "daily_budget": {
        "base_10": "40.00",
        "base_50": "200.00",
        "base_75": "300.00",
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_1000": "4,000.00"
     }
  },
  "RON": {
     "currency_name": "Romanian Leu",
     "usd_to_currency": "3.99",

     "lifetime_budget": {
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_750": "3,000.00",
        "base_1000": "4,000.00",
        "base_5000": "20,000.00",
        "base_10000": "40,000.00"
     },

     "daily_budget": {
        "base_10": "40.00",
        "base_50": "200.00",
        "base_75": "300.00",
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_1000": "4,000.00"
     }
  },
  "RUB": {
     "currency_name": "Russian Rouble",
     "usd_to_currency": "63.24",

     "lifetime_budget": {
        "base_100": "6,000.00",
        "base_500": "30,000.00",
        "base_750": "50,000.00",
        "base_1000": "60,000.00",
        "base_5000": "300,000.00",
        "base_10000": "600,000.00"
     },

     "daily_budget": {
        "base_10": "600.00",
        "base_50": "3,000.00",
        "base_75": "5,000.00",
        "base_100": "6,000.00",
        "base_500": "30,000.00",
        "base_1000": "60,000.00"
     }
  },
  "SAR": {
     "currency_name": "Saudi Riyal",
     "usd_to_currency": "3.75",

     "lifetime_budget": {
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_750": "3,000.00",
        "base_1000": "4,000.00",
        "base_5000": "20,000.00",
        "base_10000": "40,000.00"
     },

     "daily_budget": {
        "base_10": "40.00",
        "base_50": "200.00",
        "base_75": "300.00",
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_1000": "4,000.00"
     }
  },
  "SGD": {
     "currency_name": "Singapore Dollar",
     "usd_to_currency": "1.37",

     "lifetime_budget": {
        "base_100": "100.00",
        "base_500": "700.00",
        "base_750": "1,000.00",
        "base_1000": "1,000.00",
        "base_5000": "7,000.00",
        "base_10000": "10,000.00"
     },

     "daily_budget": {
        "base_10": "10.00",
        "base_50": "70.00",
        "base_75": "100.00",
        "base_100": "100.00",
        "base_500": "700.00",
        "base_1000": "1,000.00"
     }
  },
  "ZAR": {
     "currency_name": "South African Rand",
     "usd_to_currency": "13.72",

     "lifetime_budget": {
        "base_100": "1,000.00",
        "base_500": "7,000.00",
        "base_750": "10,000.00",
        "base_1000": "10,000.00",
        "base_5000": "70,000.00",
        "base_10000": "100,000.00"
     },

     "daily_budget": {
        "base_10": "100.00",
        "base_50": "700.00",
        "base_75": "1,000.00",
        "base_100": "1,000.00",
        "base_500": "7,000.00",
        "base_1000": "10,000.00"
     }
  },
  "KRW": {
     "currency_name": "South Korean Won",
     "usd_to_currency": "1,114.73",

     "lifetime_budget": {
        "base_100": "100,000.00",
        "base_500": "600,000.00",
        "base_750": "800,000.00",
        "base_1000": "1,000,000.00",
        "base_5000": "6,000,000.00",
        "base_10000": "10,000,000.00"
     },

     "daily_budget": {
        "base_10": "10,000.00",
        "base_50": "60,000.00",
        "base_75": "80,000.00",
        "base_100": "100,000.00",
        "base_500": "600,000.00",
        "base_1000": "1,000,000.00"
     }
  },
  "SEK": {
     "currency_name": "Swedish Krona",
     "usd_to_currency": "8.85",

     "lifetime_budget": {
        "base_100": "900.00",
        "base_500": "4,000.00",
        "base_750": "7,000.00",
        "base_1000": "9,000.00",
        "base_5000": "40,000.00",
        "base_10000": "90,000.00"
     },

     "daily_budget": {
        "base_10": "90.00",
        "base_50": "400.00",
        "base_75": "700.00",
        "base_100": "900.00",
        "base_500": "4,000.00",
        "base_1000": "9,000.00"
     }
  },
  "CHF": {
     "currency_name": "Swiss Fanc",
     "usd_to_currency": "0.99",

     "lifetime_budget": {
        "base_100": "100.00",
        "base_500": "500.00",
        "base_750": "700.00",
        "base_1000": "1,000.00",
        "base_5000": "5,000.00",
        "base_10000": "10,000.00"
     },

     "daily_budget": {
        "base_10": "9.00",
        "base_50": "50.00",
        "base_75": "70.00",
        "base_100": "100.00",
        "base_500": "500.00",
        "base_1000": "1,000.00"
     }
  },
  "THB": {
     "currency_name": "Thai Baht",
     "usd_to_currency": "33.20",

     "lifetime_budget": {
        "base_100": "3,000.00",
        "base_500": "20,000.00",
        "base_750": "20,000.00",
        "base_1000": "30,000.00",
        "base_5000": "200,000.00",
        "base_10000": "300,000.00"
     },

     "daily_budget": {
        "base_10": "300.00",
        "base_50": "2,000.00",
        "base_75": "2,000.00",
        "base_100": "3,000.00",
        "base_500": "20,000.00",
        "base_1000": "30,000.00"
     }
  },
  "TRY": {
     "currency_name": "Turkish Lira",
     "usd_to_currency": "4.67",

     "lifetime_budget": {
        "base_100": "500.00",
        "base_500": "2,000.00",
        "base_750": "4,000.00",
        "base_1000": "5,000.00",
        "base_5000": "20,000.00",
        "base_10000": "50,000.00"
     },

     "daily_budget": {
        "base_10": "50.00",
        "base_50": "200.00",
        "base_75": "400.00",
        "base_100": "500.00",
        "base_500": "2,000.00",
        "base_1000": "5,000.00"
     }
  },
  "AED": {
     "currency_name": "UAE Dirham",
     "usd_to_currency": "3.67",

     "lifetime_budget": {
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_750": "3,000.00",
        "base_1000": "4,000.00",
        "base_5000": "20,000.00",
        "base_10000": "40,000.00"
     },

     "daily_budget": {
        "base_10": "40.00",
        "base_50": "200.00",
        "base_75": "300.00",
        "base_100": "400.00",
        "base_500": "2,000.00",
        "base_1000": "4,000.00"
     }
  },
  "UYU": {
     "currency_name": "Uruguay Peso",
     "usd_to_currency": "31.32",

     "lifetime_budget": {
        "base_100": "3,000.00",
        "base_500": "20,000.00",
        "base_750": "20,000.00",
        "base_1000": "30,000.00",
        "base_5000": "200,000.00",
        "base_10000": "300,000.00"
     },

     "daily_budget": {
        "base_10": "300.00",
        "base_50": "2,000.00",
        "base_75": "2,000.00",
        "base_100": "3,000.00",
        "base_500": "20,000.00",
        "base_1000": "30,000.00"
     }
  },
  "USD": {
     "currency_name": "US Dollars",
     "usd_to_currency": "1.00",

     "lifetime_budget": {
        "base_100": "100.00",
        "base_500": "500.00",
        "base_750": "800.00",
        "base_1000": "1,000.00",
        "base_5000": "5,000.00",
        "base_10000": "10,000.00"
     },

     "daily_budget": {
        "base_10": "10.00",
        "base_50": "50.00",
        "base_75": "80.00",
        "base_100": "100.00",
        "base_500": "500.00",
        "base_1000": "1,000.00"
     }
  },
  "VEF": {
     "currency_name": "Venezuelan Bolivar **",
     "usd_to_currency": "114,856.00",

     "lifetime_budget": {
        "base_100": "10,000,000.00",
        "base_500": "60,000,000.00",
        "base_750": "90,000,000.00",
        "base_1000": "100,000,000.00",
        "base_5000": "600,000,000.00",
        "base_10000": "1,000,000,000.00"
     },

     "daily_budget": {
        "base_10": "1,000,000.00",
        "base_50": "6,000,000.00",
        "base_75": "9,000,000.00",
        "base_100": "10,000,000.00",
        "base_500": "60,000,000.00",
        "base_1000": "100,000,000.00"
     }
  },
  "VND": {
     "currency_name": "Vietnamese Dong",
     "usd_to_currency": "23,046.00",

     "lifetime_budget": {
        "base_100": "2,000,000.00",
        "base_500": "10,000,000.00",
        "base_750": "20,000,000.00",
        "base_1000": "20,000,000.00",
        "base_5000": "100,000,000.00",
        "base_10000": "200,000,000.00"
     },

     "daily_budget": {
        "base_10": "200,000.00",
        "base_50": "1,000,000.00",
        "base_75": "2,000,000.00",
        "base_100": "2,000,000.00",
        "base_500": "10,000,000.00",
        "base_1000": "20,000,000.00"
     }
  }
};

export default currencies;
