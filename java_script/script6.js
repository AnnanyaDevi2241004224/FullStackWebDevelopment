async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    // let data = await x.json()
    // console.log(data);
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
let data = await x.json() 
return data
}

async function main() {
    // async function getData() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(455)

    //         }, 5500);
    //     })

  
    console.log('Loading modules');
    console.log('Do something else');
    console.log('load data');
    let data = await getData();
    console.log(data);
    console.log('process data');
    console.log('task 2');
}
main()
// data.then((v)=>
// {
//     console.log(data);
//     console.log('process data');
//     console.log('task 2');
// })


