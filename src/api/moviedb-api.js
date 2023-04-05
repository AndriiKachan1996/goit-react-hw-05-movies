const API_KEY = '427714332144f4d577c0c71ca226b2b3';
const BASE_URL = 'https://api.themoviedb.org/3/';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export async function getTrendsMovies() {
  try {
    const responce = await fetch(
      `${BASE_URL}trending/all/week?api_key=${API_KEY}`
    );
    if (responce.status === 200) {
      const result = await responce.json();
      return result.results.map(item => {
        return {
          id: item.id,
          name: item.name || item.title,
          poster_path: getImagePath(item.poster_path),
        };
      });
    } else return [];
  } catch (error) {
    return new Promise.reject(
      `Ошибка ${error.message} получения информации фильмам `
    );
  }
}

export async function getMovieDesc(movieID) {
  try {
    const responce = await fetch(
      `${BASE_URL}movie/${movieID}?api_key=${API_KEY}&language=en-US`
    );
    if (responce.status === 200) {
      const result = await responce.json();

      return result;
    } else return {};
  } catch (error) {
    return new Promise.reject(
      `Ошибка ${error.message} получения информации фильму ${movieID}  `
    );
  }
}
export async function getMovieReviews(movieID) {
  try {
    const responce = await fetch(
      `${BASE_URL}movie/${movieID}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (responce.status === 200) {
      const result = await responce.json();

      return result?.results.map(({ author, content, id }) => ({
        author,
        content,
        id,
      }));
    } else return [];
  } catch (error) {
    return new Promise.reject(
      `Ошибка ${error.message} получения отзывов к фильму ${movieID}  `
    );
  }
}

export async function getMovieCast(movieID) {
  try {
    const responce = await fetch(
      `${BASE_URL}movie/${movieID}/credits?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (responce.status === 200) {
      const data = await responce.json();
      const results = data.cast.map(item => {
        return {
          id: item.id,
          name: item.name,
          original_name: item.original_name,
          popularity: item.popularity,
          profile_path: getImagePath(item.profile_path),
          character: item.character,
        };
      });

      return results;
    } else return [];
  } catch (error) {
    return new Promise.reject(
      `Ошибка ${error.message} получения актеров фильма ${movieID}  `
    );
  }
}

export async function getSearchMovie(query = '') {
  try {
    if (query === '') return [];
    const responce = await fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );

    if (responce.status === 200) {
      const result = await responce.json();
      return result.results.map(item => {
        return {
          id: item.id,
          name: item.name || item.title,
          poster_path: getImagePath(item.poster_path),
        };
      });
    } else return [];
  } catch (error) {
    return new Promise.reject(
      `Ошибка ${error.message} поиска фильма по запросу ${query}`
    );
  }
}

export function getImagePath(image) {
  return image
    ? BASE_IMAGE_URL + image
    : 'https://via.placeholder.com/300x400/bdc5f2/2b2323?text=Image+not+found';
}

export const getMovieYear = releaseDate => {
  return releaseDate !== '' ? `(${new Date(releaseDate).getFullYear()})` : '';
};
