export const getUsersUrl = (string: string) => `/users${string}`
export const getUsersUrlHash = (string: string) => `/users/hash${string}`
export const getUserVariant = (string: string) =>
	`/users/profile/variant${string}`
export const getMoviesUrl = (string: string) => `/movies${string}`
export const getGenresUrl = (string: string) => `/genres${string}`
export const getActorsUrl = (string: string) => `/actors${string}`
export const getDeadlineUrl = (searchTerm: string = '') =>
	`/deadlines${searchTerm ? `?searchTerm=${searchTerm}` : ''}`

export const getFullTasksUrl = (string: string) => `/full-test${string}`
export const getTask1Url = (string: string) => `/task1${string}`
export const getTask2Url = (string: string) => `/task2${string}`
export const getTask3Url = (string: string, number: string) =>
	`/task${number}/${string}`
export const getTask10Url = (string: string) => `/task10${string}`
export const getTask11Url = (string: string) => `/task11${string}`
export const getTask12Url = (string: string, num: string) =>
	`/task${num}${string}`
export const getTask37Url = (string: string) => `/task37${string}`
export const getGrammarTask1Url = (string: string) => `/task19${string}`
export const getGrammarTask2Url = (string: string) => `/task30${string}`
export const getClassUrl = (string: string) => `/classes/hash${string}`
export const postClass = (string: string) => `/classes/create${string}`
