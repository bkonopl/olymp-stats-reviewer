export interface IOlympiad {
  name: string // Республиканская олимпиада по информатике
  rate: number // Мокаем очки и ставим просто 1 или любое дефолтное значение
  degree: string // диплом второй степени | участник | похвальный отзыв
  place: string // 29 место из 111
  date?: string // дата если возможно узнать или не возврашать
}

export interface IParticipant {
  id: number // уникальный идентификатор
  name: string // Сергей Пискун
  olympiads: IOlympiad[]
}
