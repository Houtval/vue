import Api from '../utils/request'
const apiDeleteImg1 = (image: string) => {
    Api({
        url: '/deleteImg1',
        method: 'post',
        params: {
            img: image,
        }
    }).then((res) => {
        return res;
    });
}

const apiDeleteImg2 = (image: string) => {
    Api({
        url: '/deleteImg2',
        method: 'post',
        params: {
            img: image,
        }
    }).then((res) => {
        return res;
    });
}
const apiPutImg1 = (image: FormData) => {
    Api({
        url: '/putImg1',
        method: 'post',
        params: {
            img: image,
        }
    }).then((res) => {
        return res;
    });
}

const apiPutImg2 = (image: FormData) => {
    Api({
        url: '/putImg2',
        method: 'post',
        data: {
            img: image,
        }
    }).then((res) => {
        return res;
    });
}

const apiUpdateImg1 = (image: FormData, Path: string) => {
    Api({
        url: '/updateImg1',
        method: 'post',
        params: {
            path: Path,
        },
        data: {
            img: image,
        }
    }).then((res) => {
        return res;
    });
}

const apiUpdateImg2 = (image: FormData, Path: string) => {
    Api({
        url: '/updateImg2',
        method: 'post',
        params: {
            path: Path,
        },
        data: {
            img: image,
        }
    }).then((res) => {
        return res;
    });
}

export { apiDeleteImg1, apiDeleteImg2, apiPutImg1, apiPutImg2, apiUpdateImg1, apiUpdateImg2 }