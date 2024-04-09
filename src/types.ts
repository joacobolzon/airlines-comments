export enum Visibility{
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}

export enum Weather{
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Windy = "windy",
  Stormy = "stormy"
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// ONE WAY TO DO THIS IS TAKING WHAT I NEED FROM THE INTERFACE
// export type NonSensitiveInfoDiaryEntry = Pick<
//   DiaryEntry,
//   "id" | "date" | "weather" | "visibility"
// >;

// ANOTHER WAY WHERE I CAN CHOOSE WHICH PROPERTIES I WANNA OMIT
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">

export type NewDiaryEntry = Omit<DiaryEntry, "id">
