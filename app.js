//DOm 

const sportsList = document.getElementById("sports");

  // Selecting all list items within the unordered list
  const listItems = sportsList.getElementsByTagName("li");

  // Loop through each list item and change the color
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "purple"; // Change this to your desired color
    listItems[i].style.fontSize = '3rem';
  }