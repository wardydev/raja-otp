// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertToZeroPrefix(number: any) {
  const cleanedNumber = number.replace(/\D/g, "");

  if (cleanedNumber.startsWith("62")) {
    const convertedNumber = `0${cleanedNumber.slice(2)}`;
    return convertedNumber;
  }

  return cleanedNumber;
}

export function isEmailValid(email: string) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  return emailRegex.test(email);
}
