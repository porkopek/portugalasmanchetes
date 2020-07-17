export const translateIntoPortuguese = (text: string) => {
  const englishWords: { [keyword: string]: string } = {
    culture: 'cultura',
    news: 'actualidade',
    sports: 'desporto',
    science: 'ciência',
    religion: 'religião',
    fun: 'diversão',
    tech: 'tecnologia',
    weather: 'tempo',

    history: 'história',
  };
  return englishWords[text];
};
