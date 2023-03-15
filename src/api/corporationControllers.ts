import Api from '../utils/request'


async function apiGetImg1() {
    let api = await Api({
        url: "/HomeController/getImg1",
        method: 'post',
    }).then((res) => {
        return res;
    });
    return api;
}

async function apiGetImg2() {
    let api = await Api({
        url: "/HomeController/getImg2",
        method: 'post',
    }).then((res) => {
        return res;
    });
    return api;
}

async function apiDelImg1(Img: string) {
    let a = File
    let api = await Api({
        url: "/HomeController/deleteImg1",
        method: 'post',
        params: {
            img: Img
        }
    }).then((res) => {
        return res;
    });
    return api;
}

async function apiDelImg2(Img: string) {
    let a = File
    let api = await Api({
        url: "/HomeController/deleteImg2",
        method: 'post',
        params: {
            img: Img
        }
    }).then((res) => {
        return res;
    });
    return api;
}

async function apiPutImg1(File: FormData) {
    let a = File
    let api = await Api({
        url: "/HomeController/putImg1",
        method: 'post',
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data: {
            a
        },
        transformRequest: [
            function () {
                return a
            }
        ],
    }).then((res) => {
        return res;
    });
    return api;
}

async function apiPutImg2(File: FormData) {
    let a = File
    let api = await Api({
        url: "/HomeController/putImg2",
        method: 'post',
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data: {
            a
        },
        transformRequest: [
            function () {
                return a
            }
        ],
    }).then((res) => {
        return res;
    });
    return api;
}


async function apiUpdateImg1(File: FormData, Url: string) {
    let a = File
    let api = await Api({
        url: "/HomeController/updateImg1",
        method: 'post',
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data: {
            a
        },
        transformRequest: [
            function () {
                return a
            }
        ],
        params: {
            url: Url
        }


    }).then((res) => {
        return res;
    });
    return api;
}

async function apiUpdateImg2(File: FormData, Url: string) {
    let a = File
    let api = await Api({
        url: "/HomeController/updateImg2",
        method: 'post',
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data: {
            a
        },
        transformRequest: [
            function () {
                return a
            }
        ],
        params: {
            url: Url
        }


    }).then((res) => {
        return res;
    });
    return api;
}



export { apiDelImg1, apiDelImg2, apiPutImg1, apiPutImg2, apiUpdateImg1, apiUpdateImg2,apiGetImg1,apiGetImg2 }