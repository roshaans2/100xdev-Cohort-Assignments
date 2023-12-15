// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)



const updateClock = () => {
  const currentTime = new Date();

 
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');

  
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  console.log('Current Time (HH:MM::SS):', formattedTime);

 
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedTimeAMPM = `${(hours % 12).toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
  console.log('Current Time (HH:MM::SS AM/PM):', formattedTimeAMPM);
};

setInterval(updateClock, 1000);