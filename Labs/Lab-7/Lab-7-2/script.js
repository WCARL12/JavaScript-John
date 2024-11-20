fetch("https://holidayapi.com/v1/holidays?pretty&key=f7e72059-b880-4fae-9de9-b6656fa72530&country=CA&year=2023")
.then((response) => {
    return response.json()
})
.then((result) => {
    result.holidays.forEach(holiday => {
        console.log(holiday.name);
        
    })
    
})