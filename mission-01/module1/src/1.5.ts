interface userInfo {
    company: 'Alpha Commerz ltd' // type literal
    location: string;
    buldingNo: number;
    floor?: 12; //optional that might be on the  object or not
}

const user: userInfo = {
    company: 'Alpha Commerz ltd',
    location: 'Dhanmondhi 27',
    buldingNo: 24
}