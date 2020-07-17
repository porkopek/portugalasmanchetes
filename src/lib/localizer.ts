export const translateIntoPortuguese = (text: string) => {
  const portugueseDictionary: { [keyword: string]: string } = {
    culture: 'cultura',
    news: 'actualidade',
    sports: 'desporto',
    science: 'ciência',
    religion: 'religião',
    fun: 'diversão',
    tech: 'tecnologia',
    weather: 'tempo',
    history: 'história',
    en: 'inglês',
    es: 'espanhol',
    pt: 'português',
    all: 'todas as línguas',
  };
  return portugueseDictionary[text];
};
