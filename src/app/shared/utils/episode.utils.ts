
export function formatEpisode(code: string): string {

  const parts = code.split('E');

  const season = Number(parts[0].replace('S', ''));

  const episode = Number(parts[1]);

  return `Temporada ${season} - Episodio ${episode}`;

}
