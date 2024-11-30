export class RandomValueGenerator {
  static generateValidPassword(length: number): string {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-=[]{}|;:\'",.<>?'

    const getRandomChar = (chars: string): string =>
      chars[Math.floor(Math.random() * chars.length)]

    let password = [
      getRandomChar(lowerCase),
      getRandomChar(upperCase),
      getRandomChar(numbers),
      getRandomChar(symbols),
    ]

    const allChars = lowerCase + upperCase + numbers + symbols
    for (let i = password.length; i < length; i++) {
      password.push(getRandomChar(allChars))
    }

    password = password.sort(() => Math.random() - 0.5)

    return password.join('')
  }

  static generateRandomLowercaseString(length: number): string {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'

    const getRandomChar = (chars: string): string =>
      chars[Math.floor(Math.random() * chars.length)]

    let randomString = ''
    for (let i = 0; i < length; i++) {
      randomString += getRandomChar(lowerCase)
    }

    return randomString
  }
}
