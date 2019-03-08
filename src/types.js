export default [
  {
    name: 'Visa',
    cardLength: [13, 16],
    prefixes: [4],
    checkDigit: true,
    svg: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-symbol svg-symbol--visa">
        <path d="M15.6522 8C13.5809 8 12.5217 9.04545 12.5217 10.3743C12.5217 12.7781 15.2348 12.4545 15.2348 13.6898C15.2348 13.8984 15.0783 14.3957 13.9409 14.3957C12.8009 14.3957 12.0626 13.9465 12.0626 13.9465L11.7078 15.5722C11.7078 15.5722 12.4461 16 13.8574 16C15.2687 16 17.2174 14.893 17.2174 13.2834C17.2174 11.3476 14.5043 11.1952 14.5043 10.3316C14.5043 9.89037 14.8383 9.5615 15.8191 9.5615C16.4557 9.5615 17.1757 10.0535 17.1757 10.0535L17.5096 8.38503C17.5096 8.38503 16.5626 8 15.6522 8ZM6.82435 8.14973L5.02957 13.5829C5.02957 13.5829 4.90696 13.1203 4.86261 12.8342C3.83739 10.4759 2.17043 9.60428 2.17043 9.60428L3.75652 15.7647H5.92696L8.93217 8.14973H6.82435ZM9.70435 8.14973L8.53565 15.7647H10.5183L11.7078 8.14973H9.70435ZM20.4104 8.14973L17.1757 15.7647H19.1374L19.5339 14.6738H21.9965L22.2052 15.7647H24L22.4765 8.14973H20.4104ZM0 8.17112C0 8.17112 3.87652 9.40107 4.77913 12.385L4.1113 8.91979C4.1113 8.91979 3.82435 8.17112 3.04696 8.17112H0ZM21.1617 10.3529L21.7043 13.2193H20.0765L21.1617 10.3529Z" fill="currentColor"/>
      </svg>
    `
  },
  {
    name: 'MasterCard',
    cardLength: [16],
    prefixes: [51, 52, 53, 54, 55],
    checkDigit: true,
    svg: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-symbol svg-symbol--mastercard">
        <path d="M7.68 4.32001C3.44544 4.32001 0 7.76545 0 12C0 16.2346 3.44544 19.68 7.68 19.68C9.28092 19.68 10.7682 19.1864 12 18.345C13.2317 19.186 14.7188 19.68 16.32 19.68C20.5559 19.68 24 16.2359 24 12C24 7.76415 20.5559 4.32001 16.32 4.32001C14.7188 4.32001 13.2317 4.81404 12 5.65501C10.7682 4.81363 9.28092 4.32001 7.68 4.32001ZM16.32 5.28001C20.037 5.28001 23.04 8.28297 23.04 12C23.04 15.717 20.037 18.72 16.32 18.72C15.0237 18.72 13.8187 18.3484 12.7931 17.715C14.3644 16.3077 15.36 14.2702 15.36 12C15.36 9.7298 14.3644 7.69229 12.7931 6.28501C13.8187 5.65159 15.0237 5.28001 16.32 5.28001Z" fill="currentColor"/>
      </svg>`
  },
  {
    name: 'DinersClub',
    cardLength: [14, 16],
    prefixes: [36, 38, 54, 55],
    checkDigit: true,
    svg: null
  },
  {
    name: 'CarteBlanche',
    cardLength: [14],
    prefixes: [300, 301, 302, 303, 304, 305],
    checkDigit: true,
    svg: null
  },
  {
    name: 'AmEx',
    cardLength: [15],
    prefixes: [34, 37],
    checkDigit: true,
    svg: null
  },
  {
    name: 'Discover',
    cardLength: [16],
    prefixes: [6011, 622, 64, 65],
    checkDigit: true,
    svg: null
  },
  {
    name: 'JCB',
    cardLength: [16],
    prefixes: [35],
    checkDigit: true,
    svg: null
  },
  {
    name: 'enRoute',
    cardLength: [15],
    prefixes: [2014, 2149],
    checkDigit: true,
    svg: null
  },
  {
    name: 'Solo',
    cardLength: [16, 18, 19],
    prefixes: [6334, 6767],
    checkDigit: true,
    svg: null
  },
  {
    name: 'Switch',
    cardLength: [16, 18, 19],
    prefixes: [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759],
    checkDigit: true,
    svg: null
  },
  {
    name: 'Maestro',
    cardLength: [12, 13, 14, 15, 16, 18, 19],
    prefixes: [5018, 5020, 5038, 6304, 6759, 6761, 6762, 6763],
    checkDigit: true,
    svg: null
  },
  {
    name: 'VisaElectron',
    cardLength: [16],
    prefixes: [4026, 417500, 4508, 4844, 4913, 4917],
    checkDigit: true,
    svg: null
  },
  {
    name: 'LaserCard',
    cardLength: [16, 17, 18, 19],
    prefixes: [6304, 6706, 6771, 6709],
    checkDigit: true,
    svg: null
  }
]
