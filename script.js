const birthForm = document.getElementById("birthForm");
const resultDiv = document.getElementById("result");

birthForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const dob = new Date(document.getElementById("dob").value);

  const zodiacSign = calculateZodiacSign(dob.getMonth() + 1, dob.getDate());
  const chineseZodiacSign = calculateChineseZodiacSign(dob.getFullYear());

  resultDiv.innerHTML = `
      <p>Zodiac Sign: ${zodiacSign}</p>
      <p>Chinese Zodiac Sign: ${chineseZodiacSign}</p>
    `;
});

function calculateZodiacSign(month, day) {
  const zodiacSigns = [
    "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer",
    "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"
  ];

  const zodiacDates = [
    [1, 20], [2, 19], [3, 21], [4, 20], [5, 21], [6, 21],
    [7, 23], [9, 23], [10, 23], [11, 22], [12, 22]
  ];

  for (let i = 0; i < zodiacDates.length; i++) {
    const startMonth = zodiacDates[i][0];
    const startDay = zodiacDates[i][1];
    const endMonth = zodiacDates[i + 1] ? zodiacDates[i + 1][0] : zodiacDates[0][0];
    const endDay = zodiacDates[i + 1] ? zodiacDates[i + 1][1] : zodiacDates[0][1];

    if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
      return zodiacSigns[i];
    }
  }
}

function calculateChineseZodiacSign(year) {
  const chineseZodiacs = [
    "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
    "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
  ];

  return chineseZodiacs[(year - 1900) % 12];
}
