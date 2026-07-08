export const dateFormat = (date) => {
    const newDate = new Date(date)
    const dateTime = newDate.toLocaleString('en-US',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
    
    return dateTime
}