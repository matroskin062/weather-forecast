export const windDirectionToText = (direction) => {
  if (direction > 337.5) return 'Северный';
  if (direction > 292.5) return 'Северо-Западный';
  if (direction > 247.5) return 'Западный';
  if (direction > 202.5) return 'Юго-Западный';
  if (direction > 157.5) return 'Южный';
  if (direction > 122.5) return 'Юго-Восточный';
  if (direction > 67.5) return 'Восточный';
  if (direction > 22.5) {
    return 'Северо-Восточный';
  }
  return 'Cеверный';
};
