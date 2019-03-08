import errors from './errors'
import cardTypes from './types'

/**
 * Response for the validate method
 * @param {String} message
 * @param {Boolean} valid
 * @return {{valid: boolean, message: string}}
 */
const validated = (message = 'Invalid', valid = false) => ({valid, message})

/**
 * Returns the card type by prefix
 * @param {String} card_number
 * @return {null}
 */
export const getType = (card_number) => {
  const type = cardTypes.find(card => {
    return card.prefixes.some((prefix) => (new RegExp(`^${prefix}`)).test(card_number))
  })

  return type ? type : null
}

/**
 * Validates a credit card number
 * This is an adaptation of this article https://www.braemoor.co.uk/software/creditcard.shtml
 *
 * @param {String} cardNumber
 * @return {{valid, message}}
 */
export const validate = (cardNumber) => {
  if (cardNumber.length === 0) {
    return validated(errors.none)
  }

  const cardType = getType(cardNumber)

  if (!cardType) {
    return validated(errors.unknown)
  }

  cardNumber = cardNumber.replace(/\s/g, "");

  if (!/^[0-9]{13,19}$/.exec(cardNumber)) {
    return validated(errors.invalid_format)
  }

  if (cardType.checkDigit) {
    let checksum = 0
    let j = 1
    let calc

    for (let i = cardNumber.length - 1; i >= 0; i--) {
      calc = Number(cardNumber.charAt(i)) * j
      if (calc > 9) {
        checksum = checksum + 1
        calc = calc - 10
      }

      checksum = checksum + calc
      j = j === 1 ? 2 : 1
    }

    if (checksum % 10 !== 0) {
      return validated(errors.invalid)
    }
  }

  // Check it's not a spam number
  // @TODO why? where did this number come from?
  //
  if (cardNumber === '5490997771092064') {
    return validated(errors.spam)
  }

  const validLength = cardType.cardLength.some((length) => cardNumber.length === length);
  if (!validLength) {
    return validated(errors.invalid_length)
  }

  return validated('Valid', true)
}
