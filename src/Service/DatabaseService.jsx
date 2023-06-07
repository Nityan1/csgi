import axios from "axios";
import { APIkeys } from "./Constants";
const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW5faWQiOiJCSDM0MjkiLCJwYXNzd29yZCI6IkFCSEkyMDAwQENTSVQuSU4iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0wNFQwNzo1NjozNS4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDItMDRUMDc6NTg6MjUuMDAwWiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjgyNTg5MjEyfQ.0xNINNuH9jjv3xPieT-EUlWpLIkQIw4eUh0JO7OB1lY';
const Header = new Headers();
// Header.append("Auth-")

export async function DatabaseService() {
    console.log('rootURL Endpoint');
    // const Header = new Headers();
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW5faWQiOiJCSDM0MjkiLCJwYXNzd29yZCI6IkFCSEkyMDAwQENTSVQuSU4iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0wNFQwNzo1NjozNS4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDItMDRUMDc6NTg6MjUuMDAwWiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjgyNTg5MjEyfQ.0xNINNuH9jjv3xPieT-EUlWpLIkQIw4eUh0JO7OB1lY'
    Header.append("Authorization", token)
    console.log('headersssssss', Header)
    // console.log('wddddddddddddddddd')
    let requestOptions = {
        method: 'GET',
        headers: Header
    }

    let url = APIkeys.url + APIkeys.getAllQuiz

    return new Promise((resolve, reject) => {
        fetch(url, requestOptions)
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                if (response.code === 200) {
                    resolve(response)
                } else {
                    reject(response)
                }
            }).catch(function (e) {
                console.log("ERR", e)
                reject(e)
            })
    });

}

export async function AddQuizDatabase(body) {
    console.log('add quiz data', body);
    // const Header = new Headers();
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW5faWQiOiJCSDM0MjkiLCJwYXNzd29yZCI6IkFCSEkyMDAwQENTSVQuSU4iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0wNFQwNzo1NjozNS4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDItMDRUMDc6NTg6MjUuMDAwWiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjgyNTg5MjEyfQ.0xNINNuH9jjv3xPieT-EUlWpLIkQIw4eUh0JO7OB1lY'
    Header.append("Authorization", token)
    console.log('headersssssss', Header)
    let requestOptions = {
        method: 'POST',
        url:APIkeys.url + APIkeys.addQuiz,
        headers: {"Authorization" : `Bearer ${token}`} ,
        data: body
    }
    console.log('wwwwwwwwwwwwwwwwwwwwwwwwww',requestOptions);
    
    // console.log('aaaaaaaaaaaaaaaaaaaa',url);

    return new Promise((resolve, reject) => {
        axios(requestOptions)
            .then((response) => {
                console.log(response);
                return response;
            })
            .then((response) => {
                if (response.code === 200) {
                    resolve(response)
                } else {
                    reject(response)
                }
            }).catch(function (e) {
                console.log("ERR", e)
                reject(e)
            })
    });

}


export async function getAllquestions(body) {
    console.log('bodyyyyyyyyyyyyyyyyyyy', body);
    // const Header = new Headers();
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW5faWQiOiJCSDM0MjkiLCJwYXNzd29yZCI6IkFCSEkyMDAwQENTSVQuSU4iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0wNFQwNzo1NjozNS4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDItMDRUMDc6NTg6MjUuMDAwWiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjgyNTg5MjEyfQ.0xNINNuH9jjv3xPieT-EUlWpLIkQIw4eUh0JO7OB1lY'
    Header.append("Authorization", token)
    console.log('headersssssss', Header)
    let requestOptions = {
        method: 'GET',
        headers: Header,
    }
    console.log('wwwwwwwwwwwwwwwwwwwwwwwwww',requestOptions);
    let url = APIkeys.url + APIkeys.getAllquestions + body + '/getAllQuestions' ;
    console.log('aaaaaaaaaaaaaaaaaaaa',url);

    return new Promise((resolve, reject) => {
        fetch(url, requestOptions)
            .then((response) => {
                console.log(response);
                return response.json()
            })
            .then((response) => {
                if (response.code === 200) {
                    resolve(response)
                } else {
                    reject(response)
                }
            }).catch(function (e) {
                console.log("ERR", e)
                reject(e)
            })
    });

}


export async function deleteQuizDatabase(body) {
    console.log('bodyyyyyyyyyyyyyyyyyyy', body);
    // const Header = new Headers();
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW5faWQiOiJCSDM0MjkiLCJwYXNzd29yZCI6IkFCSEkyMDAwQENTSVQuSU4iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0wNFQwNzo1NjozNS4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDItMDRUMDc6NTg6MjUuMDAwWiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjgyNTg5MjEyfQ.0xNINNuH9jjv3xPieT-EUlWpLIkQIw4eUh0JO7OB1lY'
    Header.append("Authorization", token)
    console.log('headersssssss', Header)
    let requestOptions = {
        method: 'DELETE',
        headers: {"Authorization" : `Bearer ${token}`}
    }
    console.log('wwwwwwwwwwwwwwwwwwwwwwwwww',requestOptions);
    let url = APIkeys.url + APIkeys.deleteQuiz + body ;
    console.log('aaaaaaaaaaaaaaaaaaaa',url);

    return new Promise((resolve, reject) => {
        fetch(url, requestOptions)
            .then((response) => {
                console.log(response);
                return response.json()
            })
            .then((response) => {
                if (response.code === 200) {
                    resolve(response)
                } else {
                    reject(response)
                }
            }).catch(function (e) {
                console.log("ERR", e)
                reject(e)
            })
    });

}

export async function addNoticeDatabaseService(body) {
    console.log('bodyyyyyyyyyyyyyyyyyyy', body);
    // const Header = new Headers();
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW5faWQiOiJCSDM0MjkiLCJwYXNzd29yZCI6IkFCSEkyMDAwQENTSVQuSU4iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0wNFQwNzo1NjozNS4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDItMDRUMDc6NTg6MjUuMDAwWiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjgyNTg5MjEyfQ.0xNINNuH9jjv3xPieT-EUlWpLIkQIw4eUh0JO7OB1lY'
    // Header.append("Authorization", token)
    let requestOptions = {
        method: 'POST',
        headers: {"Authorization" : `Bearer ${token}`},
        data:body,
        url :APIkeys.url + APIkeys.addNotice
    }
    console.log('wwwwwwwwwwwwwwwwwwwwwwwwww',requestOptions);
    // let 
    // console.log('aaaaaaaaaaaaaaaaaaaa',url);

    return new Promise((resolve, reject) => {
        axios(requestOptions)
            .then((response) => {
                // console.log(response);
                return response
            })
            .then((response) => {
                if (response.status === 200) {
                    resolve(response)
                } else {
                    reject(response)
                }
            }).catch(function (e) {
                console.log("ERR", e)
                reject(e)
            })
    });

}

export async function getAllNotices() {
    // console.log('bodyyyyyyyyyyyyyyyyyyy', body);
    // const Header = new Headers();
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW5faWQiOiJCSDM0MjkiLCJwYXNzd29yZCI6IkFCSEkyMDAwQENTSVQuSU4iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0wNFQwNzo1NjozNS4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDItMDRUMDc6NTg6MjUuMDAwWiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjgyNTg5MjEyfQ.0xNINNuH9jjv3xPieT-EUlWpLIkQIw4eUh0JO7OB1lY'
    // Header.append("Authorization", token)
    let requestOptions = {
        method: 'GET',
        headers: {"Authorization" : `Bearer ${token}`},
        url :APIkeys.url + APIkeys.getAllNotice
    }
    console.log('wwwwwwwwwwwwwwwwwwwwwwwwww',requestOptions);
    // let 
    // console.log('aaaaaaaaaaaaaaaaaaaa',url);

    return new Promise((resolve, reject) => {
        axios(requestOptions)
            .then((response) => {
                // console.log(response);
                return response
            })
            .then((response) => {
                if (response.status === 200) {
                    resolve(response)
                } else {
                    reject(response)
                }
            }).catch(function (e) {
                console.log("ERR", e)
                reject(e)
            })
    });

}