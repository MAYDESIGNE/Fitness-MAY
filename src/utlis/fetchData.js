export const ExerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key":  'a4db3e333emshf2949857b311138p12de96jsnd1a8fb55eaf5',
  },
};

export const youtubeSearchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": 'f6932fd66bmsh4952cae8d254aa4p19981djsnd8f152d9e2a4',
  },
};
export const FetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  // console.log(data);
  return data;
};
