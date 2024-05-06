const birthForm = document.getElementById("birthForm");
const resultDiv = document.getElementById("result");

birthForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const dob = new Date(document.getElementById("dob").value);

  const zodiacSign = calculateZodiacSign(dob.getMonth() + 1, dob.getDate());
  const chineseZodiacSign = calculateChineseZodiacSign(dob.getFullYear());

  resultDiv.innerHTML = `
      <p>Your Zodiac Sign is ${zodiacSign}</p>
      <p>Your Chinese Zodiac Sign is ${chineseZodiacSign}</p>
    `;
});

function calculateZodiacSign(month, day) {
  const zodiacSigns = [
    "Aquarius: Unique and visionary, Aquarius values independence and innovation, often marching to the beat of their own drum.", "Pisces: Compassionate and intuitive, Pisces is empathetic and artistic, often escaping reality through imagination and creativity.", "Aries: Bold and energetic, Aries are natural leaders who thrive on challenges and adventure.", "Taurus: Grounded and reliable, Taurus values stability and comfort, with a love for the finer things in life.", "Gemini: Social and curious, Gemini are adaptable and quick-witted, often juggling multiple interests and personas.", "Cancer: Nurturing and sensitive, Cancer values emotional connections and home comforts, often putting loved ones above all else.",
    "Leo: Confident and charismatic, Leo loves the spotlight and thrives on praise and admiration.", "Virgo: Practical and analytical, Virgo seeks perfection in all aspects of life, often serving as the reliable problem-solver in their social circles.", "Libra: Charming and diplomatic, Libra values harmony and fairness, often striving to maintain balance in relationships and situations.", "Scorpio: Intense and mysterious, Scorpio is passionate and determined, often driven by deep emotions and desires.", "Sagittarius: Adventurous and optimistic, Sagittarius seeks knowledge and freedom, always eager to explore new horizons.", "Capricorn: Ambitious and disciplined, Capricorn is practical and goal-oriented, often striving for success and prestige."
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
    "Rat: Intelligent and resourceful, Rats are quick-witted and adaptable, often excelling in various endeavors.", "Ox: Strong and dependable, Oxen are hardworking and persistent, known for their determination and reliability.", "Tiger: Brave and competitive, Tigers are powerful and charismatic, often displaying strong leadership qualities.", "Rabbit: Gentle and compassionate, Rabbits are sensitive and nurturing, valuing peace and harmony in their relationships.", "Dragon: Majestic and ambitious, Dragons are charismatic and innovative, often making a significant impact with their bold ideas and actions.", "Snake: Wise and intuitive, Snakes are mysterious and insightful, often possessing a deep understanding of human nature.",
    "Horse: Energetic and adventurous, Horses are free-spirited and passionate, always seeking new experiences and challenges.", "Goat:  Gentle and creative, Goats are artistic and empathetic, often enjoying the beauty of life and expressing themselves through various forms of art.", "Monkey: Clever and playful, Monkeys are intelligent and mischievous, known for their quick wit and sense of humor.", "Rooster: Confident and proud, Roosters are hardworking and meticulous, often taking pride in their appearance and accomplishments.", "Dog: Loyal and protective, Dogs are faithful and reliable, always ready to stand by their loved ones through thick and thin.", "Pig: Kind and generous, Pigs are warm-hearted and easygoing, often prioritizing the happiness and well-being of others."
  ];

  return chineseZodiacs[(year - 1900) % 12];
}
