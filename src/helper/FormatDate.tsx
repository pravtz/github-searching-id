export const FormatDate = (date: string): string => {
    const d: Date = new Date(date)
    return new Intl.DateTimeFormat('pt-BR').format(d)
}