fetch('./data.json').then(res => res.json()).then(data => {
    const dataList = document.getElementById('data-list');

    //getting our items and create a list from data source
    data.forEach(item => {
        const itemList = document.getElementById(li);
            itemList.innerHTML= `<strong>User  ID: ${item.id}</strong><br>
            <strong>Name: </strong> ${item.name}
            <br>
            <strong>Email: </strong> ${item.email}           
            `
            console.log(itemList);
            dataList.appendChild(itemList)
    })
}).catch((error) => {
    console.log(` Please handle the error ${error.message}`);
})
