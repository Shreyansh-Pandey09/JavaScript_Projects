const quotes = [
  "Dream big, work hard, stay humble.",
  "Success begins with self-belief.",
  "Every day is a fresh start.",
  "Small steps lead to big achievements.",
  "Your only limit is your mindset.",
  "Focus on progress, not perfection.",
  "Hard work beats talent when talent doesn't work hard.",
  "Stay patient, your time will come.",
  "Failure is the first step to success.",
  "Believe in yourself and never quit.",
  "Discipline creates freedom.",
  "Keep learning, keep growing.",
  "Consistency is the key to success.",
  "Turn obstacles into opportunities.",
  "Great things take time.",
  "Success is earned, not given.",
  "Confidence comes from preparation.",
  "Don't wait for opportunity, create it.",
  "Every expert was once a beginner.",
  "Be stronger than your excuses.",
  "Stay positive and keep moving forward.",
  "Your future depends on today's actions.",
  "Winners never stop trying.",
  "Dreams work when you do.",
  "Difficult roads often lead to beautiful destinations.",
  "The best investment is in yourself.",
  "Action speaks louder than intentions.",
  "Push yourself beyond your comfort zone.",
  "Every challenge makes you stronger.",
  "Stay hungry for knowledge.",
  "Success is built one day at a time.",
  "Good things happen to those who stay consistent.",
  "Make today count.",
  "Nothing changes unless you take action.",
  "Keep going, you're closer than you think."
];

const element = document.querySelector('button');
const quote = document.querySelector('h1');

element.addEventListener('click', ()=>{
    const random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random];
})