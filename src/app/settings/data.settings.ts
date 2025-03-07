type forTeams = {
    id:string,
    setSettin:string,
    num:number
}


export const forSettings:forTeams[] = [
    {
        id:new Date().toISOString(),
        setSettin: 'Сменить фото',
        num:1
    },
    {
        id:new Date().toISOString(),
        setSettin: 'Выбор фона',
        num:2
    },
    {
        id:new Date().toISOString(),
        setSettin: 'Фон чата',
        num:3,
    },
    {
        id:new Date().toISOString(),
        setSettin: 'Выбор темы',
        num:4,
    },
]