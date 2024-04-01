export function getAge(birthDate = new Date('10/18/1995')) {
  const yearInMs = 1000 * 60 * 60 * 24 * 365.25;

  const today = new Date();
  const diff = today - birthDate.getTime();

  return Math.floor(diff / yearInMs);
}
