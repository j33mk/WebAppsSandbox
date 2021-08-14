export class User {
    id!: number;
    userName!: string;
    userFullName!: string;
    userEmail!: string;
}
export function getUser(){
    let users:string[] = ["jamal","shah","ali"];
    users.forEach(user=>{
        if (user.toUpperCase()=="JAMAL") {
            console.log("The username is jamal");

        } else {
            console.log("The username is shah");

        }

    });
}
export function typo() {

}
