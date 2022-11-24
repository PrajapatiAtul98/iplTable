fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data').then(
    res =>{
        res.json().then(
            data =>{
                console.log(data);
                if(data.length > 0){
                    const sort=data.sort(function(a,b){return parseFloat(a.NRR) - parseFloat(b.NRR)})
                    var temp = '';
                    sort.forEach((itemData) => {
                        

                        temp += "<tr>";
                        temp +="<td>"+itemData.No+"</td>";
                        temp +="<td>"+itemData.Team+"</td>";
                        temp +="<td>"+itemData.Matches+"</td>";
                        temp +="<td>"+itemData.Won+"</td>";
                        temp +="<td>"+itemData.Lost+"</td>";
                        temp +="<td>"+itemData.Tied+"</td>";
                        temp +="<td>"+itemData.NRR+"</td>";
                        temp +="<td>"+itemData.Points+"</td>";
                        temp +="</tr>";
                    });
                    document.getElementById('data').innerHTML = temp;
                }
            }
        )
    }
)