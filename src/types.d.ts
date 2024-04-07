export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

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