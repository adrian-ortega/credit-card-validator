# Credit Card validation utility
This is a utility to help with front end validation of credit cards. This is an adaptation of [this article](https://www.braemoor.co.uk/software/creditcard.shtml)

### Simple Usage

```javascript
import {validate} from './src/credit-cards'

const creditCard = validate('4111 1111 1111 111')

if(creditCard.valid) {
    console.log('Credit card is invalid', creditCard.message)
} else {
    console.log('Credit card is invalid')
}
```