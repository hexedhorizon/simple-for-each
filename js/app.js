// Function to create and append list items to the ul element using the template
function createItemList() {
    const itemList = document.getElementById("itemList");
    const template = document.getElementById("item-template");

    // Fetch the JSON data from the external file
    fetch('../api/data.json')
        .then(response => response.json())
        .then(data => {
            // Loop through the JSON data
            data.forEach(function(item) {
                // Clone the template content and populate it with data
                const listItem = document.importNode(template.content, true);
                listItem.querySelector('name').textContent = item.name;
                listItem.querySelector('description').textContent = item.description;
                itemList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call the function to create the item list
createItemList();