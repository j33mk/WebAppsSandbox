// import fetch from 'cross-fetch';
// import {PostStructure} from './UtilityModules';
// const getAllPosts = async():Promise<PostStructure[]>=>{
//     const postsData:PostStructure[]=[];
//     const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const postsJson = await posts.json();
//     postsJson.forEach((post:PostStructure) => {
//         postsData.push(post);
//     });
//     return postsData;
// }
// getAllPosts().then((posts)=>{
//     console.log(posts[0]);
// }).catch((error)=>{
//     console.log(error);
// });

// const doMultiplication = async():Promise<void>=>{
//     const arbitNum:number = 1000;
//     let k:number = 0;
//     for(let i=1;i<arbitNum;i++)
//     {
//         k = i+k;
//     }
//     console.log(`the value of sum is ${k}`);
// }
// doMultiplication();