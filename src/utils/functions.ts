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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shuffleArray(array: any) {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatRupiah(angka: any) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  return formatter.format(angka);
}

export function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp * 1000); // Konversi timestamp ke milidetik
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day} ${date.getDate()} ${month} ${year} pukul ${hours}:${minutes}`;
}
